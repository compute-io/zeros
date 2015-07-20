/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	zeros = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'zero-filled array', function tests() {

	it( 'should export a function', function test() {
		expect( zeros ).to.be.a( 'function' );
	});

	it( 'should return a zero-filled array', function test() {
		var actual, expected;

		actual = zeros( 5 );
		expected = [ 0, 0, 0, 0, 0 ];

		assert.deepEqual( actual, expected );
	});

	it( 'should support fast elements', function test() {
		var actual, i;

		this.timeout( 0 );

		actual = zeros( 100000 );
		for ( i = 0; i < actual.length; i++ ) {
			assert.strictEqual( actual[ i ], 0 );
		}
	});

});
