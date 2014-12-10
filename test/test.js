/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	zeros = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-zeros', function tests() {

	it( 'should export a function', function test() {
		expect( zeros ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			'5',
			5,
			NaN,
			true,
			null,
			undefined,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				zeros( value );
			};
		}
	});

	it( 'should throw an error if not provided an array of integers which are greater than 0', function test() {
		var values = [
			[ 5, 'a' ],
			[ NaN, 7 ],
			[ 3.14, 2 ],
			[ 1, 0 ]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				zeros( value );
			};
		}
	});

	it( 'should return an array of zeros', function test() {
		var actual, expected;

		actual = zeros( [1] );
		expected = [ 0 ];

		assert.deepEqual( actual, expected );

		actual = zeros( [2,1] );
		expected = [ [0], [0] ];

		assert.deepEqual( actual, expected );

		actual = zeros( [2,1,2] );
		expected = [ [[0,0]],[[0,0]] ];

		assert.deepEqual( actual, expected );
	});

	it( 'should support fast elements', function test() {
		var actual;

		actual = zeros( [100000] );
		for ( var i = 0; i < actual.length; i++ ) {
			assert.strictEqual( actual[ i ], 0 );
		}

		actual = zeros( [100000,2] );
		for ( var j = 0; j < actual.length; j++ ) {
			assert.deepEqual( actual[ j ], [0,0] );
		}
	});

});
