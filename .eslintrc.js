/* eslint-disable capitalized-comments */
/* eslint-disable multiline-comment-style */
/* eslint-disable sort-keys */

module.exports = {
  env: {
    es6: true,
    node: true,
    commonjs: true,
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js built ins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          ['^(@material-ui)(/.*|$)'],

          // Internal packages.
          ['^(@ui|@boom-sports)(/.*|$)'],
          ['^(rxjs)(/.*|$)'],
          ['^(src)(/.*|$)'],

          // Remember to update .tsconfig.json & babel.config if you add more paths.
          [
            '^(@assets|@components|@configs|@context|@enums|@helpers|@hooks|@i18n|@models|@navigation|@screens|@services|@styles|@utils)(/.*|$)',
          ],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          // ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'capitalized-comments': 'warn',
    // 'default-case-last': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-new-object': 'error',
    'no-trailing-spaces': 'warn',
    'no-tabs': 'warn',
    'no-underscore-dangle': 'warn',
    'no-whitespace-before-property': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'max-lines': [
      'error',
      { max: 300, skipBlankLines: true, skipComments: true },
    ],
    'max-lines-per-function': [
      'error',
      { max: 160, skipBlankLines: true, skipComments: true, IIFEs: false },
    ],
    'max-nested-callbacks': ['error', { max: 3 }],
    'multiline-comment-style': ['error', 'starred-block'],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
    'sort-vars': ['error', { ignoreCase: false }],
    camelcase: ['warn', { properties: 'never' }],
    curly: ['error', 'all'],
    yoda: 'error',
  },
  overrides: [
    {
      files: ['*'],
      rules: {
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
      },
    },

    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react-hooks/exhaustive-deps': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic',
          },
        ],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow',
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            // ignoredMethodNames: [],
            overrides: {
              // accessors: AccessibilityLevel;
              constructors: 'no-public',
              // methods: AccessibilityLevel;
              // properties: AccessibilityLevel;
              // parameterProperties: AccessibilityLevel;
            },
          },
        ],
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'signature',

              'protected-field',
              'private-field',
              'public-field',

              'constructor',

              'decorated-method',
              'protected-method',
              'private-method',
              'public-method',

              'method',
            ],
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'variableLike', format: ['camelCase', 'PascalCase'] },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['camelCase', 'PascalCase'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
          },
        ],
        '@typescript-eslint/no-require-imports': ['error'],
      },
    },
  ],
};