exports.description = 'Create a basic grunt.js gruntfile.';

exports.warnOn = 'grunt.js';

exports.template = function(grunt, init, done) {
  var files = init.filesToCopy({});
  init.copyAndProcess(files, {});
  done();
};
