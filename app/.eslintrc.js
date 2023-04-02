module.exports = {
    plugins: [
        '@typescript-eslint', 'prettier', 'import'
    ],
    extends: [
        'next/core-web-vitals',
        "eslint:recommended",
        'plugin:prettier/recommended',
    ],
    rules: {
        // Following have been moved to prettier
        // indent: ['error', 4], // tab size
        // semi: ['error', 'never'], // no trailing semi-colon
        // quotes: ['error', 'single'], // prefer single quotes
        // 'comma-dangle': ['error', 'always-multiline'], // expect trailing comma in multiline
        // 'max-len': ['warn', {
        //     code: 120,
        //     tabWidth: 4,
        //     ignorePattern: '^\\s*(//|#)\\s*(.*)|\\s*[\'"`](.|\\n){0,40}[\'"`]',
        // }], // warn line length
        // 'arrow-parens': ['error', 'always'], // arrow functions should always have () = > {} styles
        // 'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        // -- ends here
        "no-unused-vars": "warn",
        'sort-imports': [ // config for base sort-imports ESLint plugin
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true, // don't produce error on sort import lines, use eslint-plugin-import instead
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
        'import/no-unresolved': 'error', // Config for eslint-plugin-import
        'import/order': [ // Config for eslint-plugin-import
            'error',
            {
                groups: [
                    'builtin', // Built-in imports (come from NodeJS native) go first
                    'external', // <- External imports
                    'internal', // <- Absolute imports
                    ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
                    'index', // <- index imports
                    'unknown', // <- unknown
                ],
                'newlines-between': 'always',
                alphabetize: {
                  /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
                  order: 'asc',
                  /* ignore case. Options: [true, false] */
                  caseInsensitive: true,
                },
            },
        ]
    },
    // Config for eslint-import-resolver-typescript
    settings: {
        'import/resolver': {
            typescript: {
              project: './tsconfig.json',
            },
        },
    },

};
