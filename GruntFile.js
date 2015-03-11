module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			css : {
				development : {
					options : {
						compress:true
					},
					files : {
						"public/app.css":[
							"src/resources/css/*.css",
							"src/resources/css/**/*.css"
						]
					}
				}
			},
			dist: {
				src: [
					   'src/resources/js/*.js',
					   'src/resources/js/**/*.js'

				],
				dest: 'public/app.js',
				src : [
					'src/resources/bootstrap/configs/*.js'
				],
				dest : 'public/configs.js'
			},
			deps: {
				src: [
					'bower_components/modernizr/modernizr.js',
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/bootstrap.js',
					'bower_components/angularjs/angular.min.js',
					'bower_components/angular-route/angular-route.min.js'
				],
				dest: 'src/<%= pkg.name %>-deps.js'
			},
			css: {
				src: ['src/resources/css/*.css',
				'src/resources/css/**/*.css'
				],
				dest: 'public/app.css'
			},
			move: {
				src: ['bower_components/angularjs/angular.min.js.map'],
				dest: 'src/angular.min.js.map'
			}
		},

		sass: {
			dev: {
				files: {
					'src/resources/css/styles.css': 'src/resources/css/styles.scss'
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/resources/js/**/*.js'],
				tasks: ['concat:dist']
			},
			styles: {
				files: ['src/resources/css/**/*.css']
			}
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ngdocs');
	grunt.loadNpmTasks('grunt-contrib-less');

	//tasks
	grunt.registerTask('default', 'Default Task Alias', ['build']);

	grunt.registerTask('build', 'Build the application', 
		[
		'concat'
		]);
}