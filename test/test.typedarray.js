/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	zeros = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'zero-filled typed array', function tests() {

	it( 'should export a function', function test() {
		expect( zeros ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided an unrecognized/unsupported data type option', function test() {
		var values = [
			'beep',
			'boop'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				zeros( 10, value );
			};
		}
	});

	it( 'should return a zero-filled typed array', function test() {
		var actual, expected;

		actual = zeros( 5, 'float32' );
		expected = new Float32Array( 5 );

		assert.deepEqual( actual, expected );

		actual = zeros( 10, 'uint8_clamped' );
		expected = new Uint8ClampedArray( 10 );

		assert.deepEqual( actual, expected );
	});

});
