module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jasmine: {
            all: {
                src: [
                    'inject.js',
                ],
                options: {
                    'vendor': 'jquery.js',
                    'specs': 'spec/*.js'
                }
            },

            istanbul: {
                src: '<%= jasmine.all.src %>',
                options: {
                    vendor: '<%= jasmine.all.options.vendor %>',
                    specs: '<%= jasmine.all.options.specs %>',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'coverage/json/coverage.json',
                        report: [
                            {type: 'html', options: {dir: 'coverage/html'}},
                            {type: 'lcov', options: {dir: 'coverage/lcov'}},
                            {type: 'text-summary'}
                        ]
                    }
                }
            },
        },

        watch: {
            js: {
                files: [
                    'inject.js',
                    'spec/injectSpec.js'
                ],
                tasks: ['jasmine:istanbul', 'jshint:all']
            }
        },

        jshint: {
            all: ['inject.js', 'spec/injectSpec.js']
        }

    });

    grunt.registerTask('test', ['jasmine:all']);
    grunt.registerTask('coverage', ['jasmine:istanbul']);
    grunt.registerTask('default', ['watch']);

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

};
