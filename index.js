'use strict';

var got = require('got');
var registryUrl = 'https://atom.io/packages/';

module.exports = function (name, cb) {
	got.head(registryUrl + encodeURIComponent(name), function(err) {
		if (err && err.code === 404) {
			cb(null, true);
			return;
		}

		if (err) {
			cb(err);
			return;
		}

		cb(null, false);
	});
};
