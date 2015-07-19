'use strict';

// MODULES //

var isPositiveIntegerArray = require( 'validate.io-positive-integer-array' ),
	isPositiveInteger = require( 'validate.io-positive-integer' ),
	ctors = require( 'compute-array-constructors' ),
	matrix = require( 'dstructs-matrix' ),
	validate = require( './validate.js' ),
	recurse = require( './recurse.js' ),
	compile = require( './compile.js' );


// ZEROS //

/**
* FUNCTION: zeros( dims[, opts] )
*	Creates a zero-filled matrix or array.
*
* @param {Number|Number[]} dims - dimensions
* @param {Object} [opts] - function options
* @param {String} [opts.dtype="generic"] - output data type
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} zeros
*/
function zeros( dims, options ) {
	/* jshint newcap:false */
	var opts = {},
		isArray,
		ndims,
		ctor,
		out,
		err,
		len,
		dt,
		i;

	isArray = isPositiveIntegerArray( dims );
	if ( !isArray && !isPositiveInteger( dims ) ) {
		throw new TypeError( 'zeros()::invalid input argument. Dimensions argument must be either a positive integer or a positive integer array. Value: `' + dims + '`.' );
	}
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	dt = opts.dtype || 'generic';
	if ( isArray ) {
		ndims = dims.length;
		if ( ndims < 2 ) {
			len = dims[ 0 ];
		}
	} else {
		ndims = 1;
		len = dims;
	}
	// 1-dimensional data structures...
	if ( ndims === 1 ) {
		ctor = ctors( dt );
		if ( ctor === null ) {
			throw new Error( 'zeros()::invalid option. Data type option does not have a corresponding array constructor. Option: `' + dt + '`.' );
		}
		// Need to fill a generic array...
		if ( dt === 'generic' ) {
			// Ensure fast elements...
			if ( len < 64000 ) {
				out = new ctor( len );
				for ( i = 0; i < len; i++ ) {
					out[ i ] = 0;
				}
			} else {
				out = [];
				for ( i = 0; i < len; i++ ) {
					out.push( 0 );
				}
			}
			return out;
		}
		// Typed-arrays are already zero-filled...
		return new ctor( len );
	}
	// Multidimensional data structures...
	if ( dt !== 'generic' ) {
		if ( ndims === 2 ) {
			return matrix( dims, dt );
		}
		// TODO: dstructs-ndarray support goes here. Until then, fall through to plain arrays...
		// return ndarray();
	}
	return recurse( dims, 0 );
} // end FUNCTION zeros()


// EXPORTS //

module.exports = zeros;
module.exports.compile = compile;
