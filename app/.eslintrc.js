module.exports = {
    // parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    // plugins: [
    //     '@typescript-eslint', 'prettier', 'import'
    // ],
    extends: [
        'next/core-web-vitals',
    ],
    rules: {
        indent: ['error', 2], // tab size
        semi: ['error', 'never'], // no trailing semi-colon
        quotes: ['error', 'single'], // prefer single quotes
        'comma-dangle': ['error', 'always-multiline'], // expect trailing comma in multiline
        'max-len': ['warn', { code: 120, tabWidth: 2 }], // warn line length
        'arrow-parens': ['error', 'always'], // arrow functions should always have () = > {} styles
    }
};
