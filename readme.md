# atom-name [![Build Status](https://travis-ci.org/danielchatfield/atom-name.svg?branch=master)](https://travis-ci.org/danielchatfield/atom-name)

> Check whether an atom package name is available.


## Install

```
$ npm install --save atom-name
```


## Usage

```js
var atomName = require('atom-name');

atomName('open-terminal', function(err, available) {
	console.log(available);
	//=> false
});
```


## CLI

```
$ npm install --global atom-name
```

```
$ npm-name --help

	Usage
	  npm-name <name>

	Exits with exit code 0 when available or 2 when taken.
```


## License

MIT © [Daniel Chatfield](https://github.com/danielchatfield)
