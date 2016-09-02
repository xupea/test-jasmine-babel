module.exports = function(grunt) {

  grunt.initConfig({
    run: {
      runJasmineES6: {
        cmd: 'jasmine',
        args: [
          'JASMINE_CONFIG_PATH=test/jasmine.json'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-run')

  grunt.registerTask('default', ['run'])

}
