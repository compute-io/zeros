'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isBoolean = require( 'validate.io-boolean-primitive' ),
	isString = require( 'validate.io-string-primitive' ),
	isPositiveIntegerArray = require( 'validate.io-positive-integer-array' );


// ZEROS //

/**
* FUNCTION: createArray( dims )
*	Creates an array of zeros recursively.
*
* @private
* @param {Array} dims - array dimensions
* @returns {Array} zero array
*/
function createArray( dims ) {
	var d = dims.shift(),
		len = dims.length,
		out,
		i;

	if ( d < 64000 ) {
		out = new Array( d );
		for ( i = 0; i < d; i++ ) {
			if ( len ) {
				out[ i ] = createArray( dims.slice() );
			} else {
				out[ i ] = 0;
			}
		}
	} else {
		out = [];
		for ( i = 0; i < d; i++ ) {
			if ( len ) {
				out.push( createArray( dims.slice() ) );
			} else {
				out.push( 0 );
			}
		}
	}
	return out;
} // end FUNCTION createArray()

/**
* FUNCTION: zeros( dims[, opts] )
*	Creates an array of zeros.
*
* @param {Array} dims - array dimensions
* @param {Object} [opts] - function options
* @param {String} [opts.type='array'] - array data type
* @param {String|Boolean} [opts.strided=false] - specifies whether to create a multidimensional array or a strided array
* @returns {Array} zero array
*/
function zeros( dims, opts ) {
	var strided = false,
		type = 'array';
	if ( !isPositiveIntegerArray( dims ) ) {
		throw new TypeError( 'zeros()::invalid input argument. Dimensions argument must be a positive integer array. Value: `' + dims + '`.' );
	}
	if ( arguments.length ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'zeros()::invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
		}
		if ( opts.hasOwnProperty( 'type' ) ) {
			type = opts.type;
			if ( !isString( type ) ) {
				throw new TypeError( 'zeros()::invalid option. Type option must be a string primitive. Option: `' + type + '`.' );
			}
			// TODO: validate whether known type
		}
		if ( opts.hasOwnProperty( 'strided' ) ) {
			strided = opts.strided;
			if ( !isBoolean( strided ) && strided !== 'ndarray' ) {
				throw new TypeError( 'zeros()::invalid option. Strided option must be either a boolean primitive or be set to `\'ndarray\'`. Option: `' + strided + '`.' );
			}
		}
	}
	// TODO: function generation. See compute-flatten for analogous strategy. Could do something similar in that case in terms of exporting a fcn for reuse (useful if needing to create many zeros arrays of the same type and dimensions).

	return createArray( dims.slice() );
} // end FUNCTION zeros()


// EXPORTS //

module.exports = zeros;
