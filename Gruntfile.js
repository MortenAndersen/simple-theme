module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
    * Sass
    */
    sass: {
      dev: {
        options: {
          style: 'nested',
          sourcemap: 'none'
        },
        files: {
          'css/style.css': 'scss/style.scss',
        }
      },
      live: {
        options: {
          style: 'compressed',
        },
        files: {
          'style.css': 'scss/style.scss',
        }
      }
    },

    /**
    * Uglify
    */
     uglify: {
    my_target: {
      files: {
        'assets/js/theme.js': ['assets/js/fitvids.js', 'assets/js/bx-slider.js', 'assets/js/lightbox.js', 'assets/js/simple.js']
      }
    }
  },

    /**
    * Autoprefixer
    */
    autoprefixer: {
      options: {
        map: true
      },
      dist: {
        files: {
          'css/style.css': 'css/style.css',
          'style.css': 'style.css',
        }
      }
    },
    /**
    * watch
    */
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true,
        },
      },
      scripts: {
    files: ['assets/js/*.js'],
    tasks: ['uglify']
  },
    },


  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['watch', 'uglify']);
};