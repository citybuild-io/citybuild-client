#!/usr/bin/env node

'use strict';

const eslint = require('eslint')

const CLIEngine = eslint.CLIEngine
const linter = new CLIEngine({
    useEslintrc: true,
})
const report = linter.executeOnFiles([
    './src/*.js',
    '!./src/*.test.js',
    './src/**/*.js',
    '!./src/**/*.test.js',
    '!./src/registerServiceWorker.js',
])

const formatter = linter.getFormatter()
const errorCheck = (errorCount, file) => errorCount + file.errorCount;

console.log(formatter(report.results));

if (report.results.reduce(errorCheck, 0) > 0) {
    process.exit(1);
}
