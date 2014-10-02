'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        jshint: {
            options: {
//                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['src/**/*.js', 'test/**/*.js'],
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/{,*/}*.js']
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);
};