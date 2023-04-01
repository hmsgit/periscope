module.exports = {
    extends: [
        'next/core-web-vitals',
        'plugin:prettier/recommended',
    ],
    rules: {
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
    }
};
