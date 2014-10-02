'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ['src/**/*.js', 'test/**/*.js']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('test', [ 'jshint', 'karma' ]);
};