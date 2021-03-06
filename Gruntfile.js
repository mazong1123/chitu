﻿/*!
 * Ratchet's Gruntfile
 * http://goratchet.com
 * Copyright 2015 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 */

/* jshint node: true */
module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function (string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            distPath: 'dist/',
            jsPath: 'src/scripts/',
            cssPath: 'src/css/',
            imagesPath: 'src/images'
        },

        banner: '/*!\n' +
                ' * =============================================================\n' +
                ' * Chitu Web App v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed under <%= pkg.license %> (https://github.com/mazong1123/chitu/blob/master/LICENSE)\n' +
                ' *\n' +
                ' * v<%= pkg.version %> designed by @mazong1123.\n' +
                ' * =============================================================\n' +
                ' */\n',

        clean: {
            dist: ['<%= meta.distPath %>']
        },

        /*concat: {
            chitu: {
                options: {
                    banner: '<%= banner %>'
                },
                src: [],
                dest: '<%= meta.distPath %>js/<%= pkg.name %>.js'
            }
        },*/

        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: [
                      '<%= meta.distPath %>css/*.css'
                    ]
                }
            }
        },

        copy: {
            all: {
                expand: true,
                cwd: 'src/',
                src: '**',
                dest: '<%= meta.distPath %>'
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: '*' // keep all important comments
            },
            chitu: {
                files: [{
                    expand: true,
                    cwd: '<%= meta.distPath %>css',
                    src: '**/*.css',
                    dest: '<%= meta.distPath %>css'
                }]
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
                compress: {
                    warnings: false
                },
                mangle: true,
                preserveComments: false
            },
            chitu: {
                files: [{
                    expand: true,
                    cwd: '<%= meta.distPath %>scripts',
                    src: '**/*.js',
                    dest: '<%= meta.distPath %>scripts'
                }]
            }
        },

        sed: {
            versionNumber: {
                pattern: (function () {
                    var old = grunt.option('oldver');
                    return old ? RegExp.quote(old) : old;
                })(),
                replacement: grunt.option('newver'),
                exclude: [
                  'dist/fonts',
                  'docs/assets',
                  'fonts',
                  'node_modules'
                ],
                recursive: true
            }
        },

        qunit: {
            all: ['tests/*.html']
        }
    });

    // Load the plugins
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    require('time-grunt')(grunt);

    // Default task(s).    
    grunt.registerTask('dist-css', ['usebanner', 'cssmin']);
    grunt.registerTask('dist-js', ['uglify']);
    grunt.registerTask('dist', ['clean', 'copy', 'dist-css', 'dist-js']);
    grunt.registerTask('default', ['dist']);

    // Version numbering task.
    // grunt change-version-number --oldver=A.B.C --newver=X.Y.Z
    // This can be overzealous, so its changes should always be manually reviewed!
    grunt.registerTask('change-version-number', 'sed');
};
