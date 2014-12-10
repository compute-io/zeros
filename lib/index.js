/**
*
*	COMPUTE: zeros
*
*
*	DESCRIPTION:
*		- Creates an array of zeros.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isInteger = require( 'validate.io-integer' );


// ZEROS //

/**
* FUNCTION: createArray( dims )
*	Creates an array of zeros recursively.
*
* @private
* @param {Array} dims - array dimensions
* @returns {Array} array of zeros
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
* FUNCTION: zeros( dims )
*	Creates an array of zeros.
*
* @param {Array} dims - array dimensions
* @returns {Array} array of zeros
*/
function zeros( dims ) {
	var len,
		d;

	if ( !Array.isArray( dims ) ) {
		throw new TypeError( 'zeros()::invalid input argument. Must provide an array.' );
	}
	len = dims.length;
	for ( var i = 0; i < len; i++ ) {
		d = dims[ i ];
		if ( !isInteger( d ) || d < 1 ) {
			throw new TypeError( 'zeros()::invalid input argument. Dimension must be an integer greater than 0.' );
		}
	}
	return createArray( dims.slice() );
} // end FUNCTION zeros()


// EXPORTS //

module.exports = zeros;
