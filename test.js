'use strict';
var assert = require('assert');
var atomName = require('./');

it('should return true when package name is available', function (cb) {
	var name = Math.random().toString(36).substring(20);
	atomName(name, function (err, available) {
		assert(!err, err);
		assert(available);
		cb();
	});
});

it('should return false when package name is taken', function (cb) {
	atomName('autocomplete-plus', function (err, available) {
		assert(!err, err);
		assert(!available);
		cb();
	});
});
