exports.description = 'Create a MIT license.';
exports.warnOn = 'LICENSE-MIT';

exports.template = function(grunt, init, done) {
  grunt.helper('prompt', [grunt.helper('prompt_for', 'author_name')],
  function(err, props) {
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    done();
  });
};
