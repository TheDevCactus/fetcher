/* eslint-disable sort-keys */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { expect } from 'chai';

import { OpenApiType } from '../src/models/OpenAPI';
import {
  buildTypeObjectFromSchema,
  expandRefsOnObject,
  followObjectPath,
  openApiTypeToTSType,
  Schema,
} from '../src/utils';

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
        '{id?: number,name: string,category?: {id?: number,name?: string},photoUrls: Array<string>,tags?: Array<{id?: number,name?: string}>,status?: string}',
    };
    it('Should convert a schema object into the text representation of a TS type', () => {
      expect(buildTypeObjectFromSchema(testData.inputSchema as unknown as Schema)).to.equal(
        testData.outputString,
      );
    });
  });
});
