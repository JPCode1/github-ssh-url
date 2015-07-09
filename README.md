[![npm](https://nodei.co/npm/github-ssh-url.png)](https://npmjs.com/package/github-ssh-url)

# github-ssh-url

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Make GitHub SSH URL from HTTPS URL or username/repository.

[travis]: https://travis-ci.org/eush77/github-ssh-url
[travis-badge]: https://travis-ci.org/eush77/github-ssh-url.svg
[david]: https://david-dm.org/eush77/github-ssh-url
[david-badge]: https://david-dm.org/eush77/github-ssh-url.png

## Example

```js
githubSshUrl('user', 'repo')
//=> 'git@github.com:user/repo.git'

githubSshUrl('user/repo')
//=> 'git@github.com:user/repo.git'

githubSshUrl('https://github.com/user/repo')
//=> 'git@github.com:user/repo.git'

githubSshUrl('git@github.com:user/repo.git#tag')
//=> 'git@github.com:user/repo.git'

githubSshUrl(sshUrl), sshUrl, 'SSH url');
//=> 'git@github.com:user/repo.git'
```

## API

#### `githubSshUrl(url)`
#### `githubSshUrl(user, repo)`

Returns SSH URL.

## Install

```
npm install github-ssh-url
```

## License

MIT
