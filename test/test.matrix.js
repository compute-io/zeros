/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	zeros = require( './../lib/matrix.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'zero-filled matrix', function tests() {

	it( 'should export a function', function test() {
		expect( zeros ).to.be.a( 'function' );
	});

	it( 'should return a zero-filled matrix', function test() {
		var actual, expected;

		actual = zeros( [2,2], 'int32' );

		expected = new Int32Array( 4 );

		assert.deepEqual( actual.shape, [2,2] );
		assert.strictEqual( actual.dtype, 'int32' );
		assert.deepEqual( actual.data, expected );
	});

});
