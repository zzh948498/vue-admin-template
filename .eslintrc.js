module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        'eslint:recommended',
        'prettier',
    ],

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'no-var': 2,
        'no-console': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-new-wrappers': 2, // 禁止new String() 等等
        'no-duplicate-imports': 1, // 禁止重复imports
        'no-multiple-empty-lines': [
            1,
            {
                max: 2,
            },
        ],
        'no-eval': 2,
        semi: 1,
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
        camelcase: 2,
        'vue/no-empty-component-block': 2, // 禁止<template> <script> <style>块为空
        'vue/html-self-closing': 0,
        'vue/max-attributes-per-line': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/attribute-hyphenation': 0,
        'vue/multi-word-component-names': 0,
        'vue/html-indent': ['error', 4],
    },
};
