exports.description = 'Create a README.';
exports.warnOn = 'README*';

exports.template = function(grunt, init, done) {
  grunt.helper('prompt', [
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'repository'),
    grunt.helper('prompt_for', 'homepage'),
    grunt.helper('prompt_for', 'bugs'),
    grunt.helper('prompt_for', 'licenses'),
    grunt.helper('prompt_for', 'author_name'),
    grunt.helper('prompt_for', 'author_email'),
    grunt.helper('prompt_for', 'author_url'),
  ],
  function(err, props) {
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    done();
  });
};
