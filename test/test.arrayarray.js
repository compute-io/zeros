/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	zeros = require( './../lib/arrayarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'zero-filled multidimensional array', function tests() {

	it( 'should export a function', function test() {
		expect( zeros ).to.be.a( 'function' );
	});

	it( 'should return a zero-filled array of arrays', function test() {
		var actual, expected;

		actual = zeros( [2,1] );
		expected = [ [0], [0] ];

		assert.deepEqual( actual, expected );

		actual = zeros( [2,1,3] );
		expected = [ [[0,0,0]], [[0,0,0]] ];

		assert.deepEqual( actual, expected );
	});

});
