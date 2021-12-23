/**
 * This file is part of the @iconify/iconify package.
 *
 * (c) Vjacheslav Trushkin <cyberalien@gmail.com>
 *
 * For the full copyright and license information, please view the license.txt or license.gpl.txt
 * files that were distributed with this source code.
 *
 * Licensed under Apache 2.0 or GPL 2.0 at your option.
 * If derivative product is not compatible with one of licenses, you can pick one of licenses.
 *
 * @license Apache 2.0
 * @license GPL 2.0
 */

/**
 * Build packages
 */
"use strict";

const fs = require('fs'),
    path = require('path'),
    glob = require('glob'),
    uglify = require('uglify-js'),
    Helper = require('./_helper');

let codeDir = 'src',
    distDir = 'dist',
    baseName = 'iconify',
    version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')).version,
    header = '',

    /**
     * List of files in order of compilation.
     * Dependencies are listed in comments after each image, except for config.js dependence
     *
     * @type {[string]}
     */
    filesOrder = [
        // Core
        'event.js',
        'init.js',

        // Configuration
        'defaults.js',
        'config.js', // requires defaults.js

        // Polyfill
        'polyfill.js', // requires config.js and event.js

        // Common files
        'prefix.js',
        'storage.js',
        'svg.js',

        // Functions to find images
        'image.js',
        'finder.js', // requires image.js
        'loader.js',

        // DOM observer
        'observer.js',

        // DOM manipulations
        'renderer.js', // requires loader.js, image.js

        // Main file
        'index.js',
    ];

let resolvedCodeDir = path.resolve(__dirname, '../' + codeDir),
    resolvedDistDir = path.resolve(__dirname, '../' + distDir),
    content;

function addFile(file, callback) {
    let content = fs.readFileSync(resolvedCodeDir + '/' + file, 'utf8').trim(),
        pos;

    // Remove comments at start
    if (content.slice(0, 2) === '/*') {
        pos = content.indexOf('*/');
        if (pos !== -1) {
            content = content.slice(pos + 2).trim();
        }
    }

    // Remove strict
    content = content.replace(/["']use strict["'];\s?/g, '');

    // Handle node.js modules
    if (file.slice(0, 7) === 'common/') {
        content = '(function() {\n\t' +
            content.replace(/\n/g, '\n\t') +
            '\n})();';

        let split = file.split('/');
        switch (split.pop()) {
            case 'storage.js':
                content = content.replace('module.exports = Storage;', 'local.Storage = Storage;')
                    .replace('require(\'./prefix\')', 'local.getPrefix');
                break;

            case 'prefix.js':
                content = content.replace('module.exports = getPrefix;', 'local.getPrefix = getPrefix;');
                break;

            case 'svg.js':
                content = content.replace('module.exports = SVG;', 'local.SVG = SVG;')
                    .replace('var config = Object.create(null);', 'var config = local.config;')
                    .replace('SVG._config = config;', '')
                    .replace('require(\'./storage\')', 'local.Storage');
                break;

            default:
                console.log('Error: no parser for', file);
                process.exit(1);
        }
    }

    if (typeof callback === 'function') {
        content = callback(content);
    }

    return content.trim();
}

// Parse all files
function parse(config) {
    let content = '',
        template = fs.readFileSync(__dirname + '/_template.js', 'utf8').replace('{version}', version);

    // Get header from template
    let pos = template.indexOf('*/');
    if (pos > 0) {
        header = template.slice(0, pos + 2) + "\n";
        template = template.slice(pos + 2).trim();
    }

    // List of files
    let testFiles = [];
    filesOrder.forEach(file => {
        testFiles.push('common/' + file);
        testFiles.push('browser/' + file);
        testFiles.push('browser/' + (config.observer ? 'with-' : 'no-') + 'observer/' + file);
        testFiles.push('browser/' + (config.api ? 'with-' : 'no-') + 'api/' + file);
    });

    // Add all files
    testFiles.forEach(file => {
        if (Helper.exists(resolvedCodeDir + '/' + file)) {
            content += '\n\t\t' + addFile(file).replace(/\n/g, '\n\t\t') + '\n';
        }
    });

    return template.replace('/* content */', content);
}

function save(file, content) {
    // Replace 4 spaces with 1 tab
    content = content.replace(/[ ]{4}/g, '\t');

    // Save original size for log
    let size = content.length;

    // Save file
    fs.writeFileSync(resolvedDistDir + '/' + file + '.js', header + content, 'utf8');

    // Save minified file
    content = uglify.minify(content);
    fs.writeFileSync(resolvedDistDir + '/' + file + '.min.js', header + content.code);

    console.log('Saved ' + distDir + '/' + file + '.js (' + size + ' bytes full, ' + content.code.length + ' bytes minified)');
}

// Create dist directory
Helper.mkdir(resolvedDistDir);

// Parse different packages
content = parse({
    observer: true,
    api: true
});
save(baseName, content);

content = parse({
    observer: false,
    api: true
});
save(baseName + '.without-observer', content);

content = parse({
    observer: true,
    api: false
});
save(baseName + '.without-api', content);

content = parse({
    observer: false,
    api: false
});
save(baseName + '.basic', content);

// Copy plugins
let resolvedPluginsDir = resolvedCodeDir + '/browser/plugins';
fs.readdirSync(resolvedPluginsDir).forEach(file => {
    if (file.slice(-3) !== '.js') {
        return;
    }
    let content = fs.readFileSync(resolvedPluginsDir + '/' + file, 'utf8');

    file = file.slice(0, file.length - 3);
    save('plugin-' + file, content);
});
