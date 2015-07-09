'use strict';

var parseGithubUrl = require('parse-github-url');


module.exports = function (user, repo) {
  var uri = repo ? user + '/' + repo : user;
  var gh = parseGithubUrl(uri);
  var path = gh.user + '/' + gh.repo + '.git';
  return 'git@github.com:' + path;
};
