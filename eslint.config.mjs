import babelParser from '@babel/eslint-parser';
import playcanvasConfig from '@playcanvas/eslint-config';
import globals from 'globals';

export default [
    ...playcanvasConfig,
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false
            },
            globals: {
                ...globals.browser,
                ...globals.mocha,
                ...globals.node
            }
        }
    }, {
        files: ['**/*.test.js', '**/*.test.mjs'],
        rules: {
            'no-unused-expressions': 'off'
        }
    }
];