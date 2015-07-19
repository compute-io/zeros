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

	it( 'should export a function to compile a zeros function', function test() {
		expect( zeros.compile ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a positive integer or an array of positive integers', function test() {
		var values = [
			'5',
			0,
			Math.PI,
			-1,
			NaN,
			true,
			null,
			undefined,
			{},
			[1,0],
			[1,null],
			[1,Math.PI],
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

	it( 'should throw an error if provided an invalid option', function test() {
		var values = [
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				zeros( [1,2,3], {
					'dtype': value
				});
			};
		}
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
				zeros( [10], {
					'dtype': value
				});
			};
		}
	});

	it( 'should return a zero-filled matrix', function test() {
		var matrix = zeros( [2,2], {
			'dtype': 'int32'
		});

		assert.deepEqual( matrix.shape, [2,2] );
		assert.strictEqual( matrix.dtype, 'int32' );
		assert.deepEqual( matrix.data, new Int32Array( 4 ) );
	});

	it( 'should return a zero-filled typed-array', function test() {
		var actual, expected;

		actual = zeros( 5, {
			'dtype': 'float32'
		});
		expected = new Float32Array( 5 );

		assert.deepEqual( actual, expected );

		actual = zeros( [10], {
			'dtype': 'uint8_clamped'
		});
		expected = new Uint8ClampedArray( 10 );

		assert.deepEqual( actual, expected );
	});

	it( 'should return a zero-filled generic array', function test() {
		var actual, expected;

		actual = zeros( 5 );
		expected = [ 0, 0, 0, 0, 0 ];

		assert.deepEqual( actual, expected );

		actual = zeros( [1] );
		expected = [ 0 ];

		assert.deepEqual( actual, expected );

		actual = zeros( [2,1] );
		expected = [ [0], [0] ];

		assert.deepEqual( actual, expected );

		actual = zeros( [2,1,3] );
		expected = [ [[0,0,0]], [[0,0,0]] ];

		assert.deepEqual( actual, expected );
	});

	it( 'should support fast elements', function test() {
		var actual, i;

		this.timeout( 0 );

		actual = zeros( [100000] );
		for ( i = 0; i < actual.length; i++ ) {
			assert.strictEqual( actual[ i ], 0 );
		}

		actual = zeros( [100000,2] );
		for ( i = 0; i < actual.length; i++ ) {
			assert.deepEqual( actual[ i ], [0,0] );
		}
	});

	it( 'should, until ndarrays are supported, ignore the `dtype` option and return a generic multidimensional array for >2 dimensions', function test() {
		var actual, expected;

		actual = zeros( [2,1,3], {
			'dtype': 'float32'
		});
		expected = [ [[0,0,0]], [[0,0,0]] ];

		assert.deepEqual( actual, expected );
	});

});
