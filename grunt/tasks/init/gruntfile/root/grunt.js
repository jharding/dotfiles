module.exports = function(grunt) {

  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      name: '<%= pkg.name %>',
      version: 'v<%= pkg.version %>',
      author: '<%= pkg.author.name || pkg.author %>',
      url: '<%= pkg.homepage %>',
      banner: ['// <%= meta.name %> <%= meta.version %>',
               '// ---<%= new Array(pkg.name.length + pkg.version.length).join("-") %>',
               '// * Website: <%= meta.url %>',
               '// * Copyright (c)  <%= grunt.template.today("yyyy") + " " + meta.author %>',
               '// * Licensed under the <%= pkg.licenses[0].type %> license.'].join('\n')
    },
    lint: {
      files: ['grunt.js']
    },
    jshint: {
      options: {
        // enforcing options
        bitwise: true,
        curly: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        trailing: true,

        // relaxing options
        boss: true,
        es5: true,
        evil: true,
        expr: true
      }
    }
  });

  grunt.registerTask('default', 'lint');
};
