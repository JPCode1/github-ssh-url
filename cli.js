#!/usr/bin/env node
'use strict';

var sshUrl = require('./');

var help = require('help-version')(usage()).help,
    concat = require('concat-stream');


function usage() {
  return [
    'Usage:  github-ssh-url [URL]',
    '',
    'With no URL, reads URL from standard input.',
    'Prints URL in the SSH format "git@github.com:username/repository.git".'
  ].join('\n');
}


(function main(argv) {
  if (argv.length > 1) {
    return help(1);
  }

  if (argv.length) {
    convert(argv[0]);
  }
  else {
    process.stdin.pipe(concat({ encoding: 'string' }, function (input) {
      convert(input.trim());
    }));
  }

  function convert(url) {
    console.log(sshUrl(url));
  }
}(process.argv.slice(2)));
