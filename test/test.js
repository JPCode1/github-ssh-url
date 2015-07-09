'use strict';

var makeSshUrl = require('..');

var test = require('tape');


test(function (t) {
  var sshUrl = 'git@github.com:user/repo.git';
  t.equal(makeSshUrl('user', 'repo'), sshUrl, 'username, repo');
  t.equal(makeSshUrl('user/repo'), sshUrl, 'username/repo');
  t.equal(makeSshUrl('https://github.com/user/repo'), sshUrl, 'HTTPS url');
  t.equal(makeSshUrl('git@github.com:user/repo.git#tag'), sshUrl, 'Git url');
  t.equal(makeSshUrl(sshUrl), sshUrl, 'SSH url');
  t.end();
});
