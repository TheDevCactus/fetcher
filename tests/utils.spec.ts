/* eslint-disable max-lines */
/* eslint-disable sort-keys */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import fs from 'fs';

import chai, { expect } from 'chai';
import spies from 'chai-spies';
import mockFS from 'mock-fs';

import { OpenApiType, Schema } from '../src/models/OpenAPI';
import {
  buildNestedObject,
  buildTypeObjectFromSchema,
  expandRefsOnObject,
  followObjectPath,
  openApiTypeToTSType,
  paramKeyToSemanticKey,
  setDeepParam,
  useHandlebarsTemplateFromFile,
} from '../src/utils';

chai.use(spies);

const should = chai.should();

describe('Utils', () => {
  describe('followObjectPath', () => {
    const testData = {
      invalidPath: '#/dog/bird',
      obj: {
        dog: {
          cat: {
            bird: {
              hiMom: true,
            },
          },
        },
      },
      validPath: '#/dog/cat/bird',
    };
    it('Should return the nested object that is at the end of the provided path', () => {
      expect(followObjectPath(testData.validPath, testData.obj)).to.equal(
        testData.obj.dog.cat.bird,
      );
    });
    it('Should throw an error when provided an invalid path', () => {
      expect(() =>
        followObjectPath(testData.invalidPath, testData.obj),
      ).to.throw('Path not valid for object');
    });
  });

  describe('expandRefsOnObject', () => {
    const testData = {
      inputObj: {
        dog: {
          bird: {
            hiMom: true,
            number: 1234,
          },
          cat: {
            $ref: '#/dog/bird',
          },
        },
      },
      inputObjMultiple: {
        dog: {
          bird: {
            hiMom: true,
            number: 1234,
          },
          cat: {
            $ref: '#/dog/bird',
          },
          lizard: {
            $ref: '#/dog/bird',
          },
        },
      },
      invalidObj: {
        dog: {
          bird: {
            hiMom: true,
            number: 1234,
          },
          cat: {
            $ref: '#/dog/hehehe',
          },
        },
      },
      outputObj: {
        dog: {
          bird: {
            hiMom: true,
            number: 1234,
          },
          cat: {
            hiMom: true,
            number: 1234,
          },
        },
      },
      outputObjMultiple: {
        dog: {
          bird: {
            hiMom: true,
            number: 1234,
          },
          cat: {
            hiMom: true,
            number: 1234,
          },
          lizard: {
            hiMom: true,
            number: 1234,
          },
        },
      },
    };
    it('Should expand a ref on an object', () => {
      expect(expandRefsOnObject(testData.inputObj)).to.deep.include(
        testData.outputObj,
      );
    });
    it('Should handle multiple refs on one object', () => {
      expect(expandRefsOnObject(testData.inputObjMultiple)).to.deep.include(
        testData.outputObjMultiple,
      );
    });
    it('Should throw an error if the ref is not found on the object', () => {
      expect(() => expandRefsOnObject(testData.invalidObj)).to.throw(
        'Ref not found on object',
      );
    });
  });

  describe('openApiTypeToTSType', () => {
    it('Should convert an OpenAPI type to a typescript type', () => {
      expect(openApiTypeToTSType(OpenApiType.Array)).to.equal('array');
      expect(openApiTypeToTSType(OpenApiType.Integer)).to.equal('number');
      expect(openApiTypeToTSType(OpenApiType.Number)).to.equal('number');
      expect(openApiTypeToTSType(OpenApiType.Object)).to.equal('object');
      expect(openApiTypeToTSType(OpenApiType.String)).to.equal('string');
      expect(openApiTypeToTSType(OpenApiType.boolean)).to.equal('boolean');
    });
    it('Should throw an error if an unknown OpenAPI type is provided', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error This is strictly so we can test the function
      expect(() => openApiTypeToTSType('dogs')).to.throw(
        'Invalid type supplied',
      );
    });
  });
  describe('buildTypeObjectFromSchema', () => {
    const testData = {
      dirtyInput: {
        array: {
          type: 'array',
        },
        badType: {
          type: 'dogsRule',
        },
      },
      dirtyObject: {
        type: 'object',
      },
      inputSchema: {
        required: ['name', 'photoUrls'],
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            example: 10,
          },
          name: {
            type: 'string',
            example: 'doggie',
          },
          category: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                format: 'int64',
                example: 1,
              },
              name: { type: 'string', example: 'Dogs' },
            },
            xml: { name: 'category' },
          },
          photoUrls: {
            type: 'array',
            xml: { wrapped: true },
            items: { type: 'string', xml: { name: 'photoUrl' } },
          },
          tags: {
            type: 'array',
            xml: { wrapped: true },
            items: {
              type: 'object',
              properties: {
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
              },
              xml: { name: 'tag' },
            },
          },
          status: {
            type: 'string',
            description: 'pet status in the store',
            enum: ['available', 'pending', 'sold'],
          },
        },
        xml: { name: 'pet' },
      },
      outputString:
        '{id?: number,name: string,category?: {id?: number,name?: string},photoUrls: Array<string>,tags?: Array<{id?: number,name?: string}>,status?: "available" | "pending" | "sold"}',
    };
    it('Should convert a schema object into the text representation of a TS type', () => {
      const builtSchema = buildTypeObjectFromSchema(
        testData.inputSchema as unknown as Schema,
      );
      expect(builtSchema).to.equal(testData.outputString);
    });
    it('Should throw an error if an array type is encountered but no item array is provided', () => {
      expect(() =>
        buildTypeObjectFromSchema(
          testData.dirtyInput.array as unknown as Schema,
        ),
      ).to.throw('Schema type array must have an items property');
    });
    it('Should throw an error if an unknown type is encountered', () => {
      expect(() =>
        buildTypeObjectFromSchema(
          testData.dirtyInput.badType as unknown as Schema,
        ),
      ).to.throw(
        `Encountered unrecognized type: ${testData.dirtyInput.badType.type}`,
      );
    });
    it('Should throw an error if the input object has neither properties or additionalProperties', () => {
      expect(() =>
        buildTypeObjectFromSchema(testData.dirtyObject as unknown as Schema),
      ).to.throw(`Schema type object must have a properties property`);
    });
  });
  describe('cleanKey', () => {
    const testData = {
      dirtyKey: '{dogsRule}',
      dirtyKeyTwo: '{dogsRule',
      dirtyKeyThree: 'dogsRule}',
      cleanKey: 'dogsRule',
      cleanKeyCleaned: 'dogsRule',
      cleaned: 'byDogsRule',
    };
    it('Should convert a url param key into a semantic normal object key, (i.e. {dogsRule} -> byDogsRule', () => {
      expect(paramKeyToSemanticKey(testData.dirtyKey)).to.equal(
        testData.cleaned,
      );
      expect(paramKeyToSemanticKey(testData.dirtyKeyTwo)).to.equal(
        testData.cleaned,
      );
      expect(paramKeyToSemanticKey(testData.dirtyKeyThree)).to.equal(
        testData.cleaned,
      );
      expect(paramKeyToSemanticKey(testData.cleanKey)).to.equal(
        testData.cleanKeyCleaned,
      );
    });
  });
  describe('buildNestedObject', () => {
    const testData = {
      nestedKeys: ['dog', 'cat', 'bird', 'fish'],
      nestedObject: {
        dog: {
          cat: {
            bird: {
              fish: {},
            },
          },
        },
      },
    };
    it('Should nest keys within a provided object', () => {
      expect(buildNestedObject(testData.nestedKeys, {})).to.deep.include(
        testData.nestedObject,
      );
    });
  });
  describe('setDeepParam', () => {
    const testData = {
      validNestedKeys: ['dog', 'cat', 'bird', 'fish'],
      invalidNestedKeys: ['dog', 'cat', 'worm', 'fish'],
      nestedObject: {
        dog: {
          cat: {
            bird: {},
          },
        },
      },
      valueToSet: 'hi mom',
    };
    it('Should deeply set a property on a nested object', () => {
      setDeepParam(
        testData.nestedObject,
        testData.validNestedKeys,
        testData.valueToSet,
      );
      expect(testData.nestedObject.dog.cat.bird).to.deep.include({
        fish: testData.valueToSet,
      });
    });
    it('Should throw an error if an invalid path is provided', () => {
      expect(() =>
        setDeepParam(
          testData.nestedObject,
          testData.invalidNestedKeys,
          testData.valueToSet,
        ),
      ).to.throw('Invalid path to param');
    });
  });
  describe('useHandlebarsTemplateFromFile', () => {
    beforeEach(() => {
      mockFS({
        someDir: {
          'template.txt': '{{arg1}},{{arg2}}',
        },
      });
    });

    afterEach(() => {
      mockFS.restore();
    });

    const testData = {
      templateFilePath: './someDir/template.txt',
      inputArgs: {
        arg1: 'dogs',
        arg2: 'rule',
      },
      output: 'dogs,rule',
    };
    it('Should load a handlebars template from a file path, and return a generator', async () => {
      const generator = await useHandlebarsTemplateFromFile(
        testData.templateFilePath,
      );
      expect(
        generator({
          ...testData.inputArgs,
        }),
      ).to.equal(testData.output);
    });
    it('Should not reload the template if already holding it in memory', async () => {
      let generator = await useHandlebarsTemplateFromFile(
        testData.templateFilePath,
      );
      generator = await useHandlebarsTemplateFromFile(
        testData.templateFilePath,
      );
      expect(
        generator({
          ...testData.inputArgs,
        }),
      ).to.equal(testData.output);
    });
  });
});
