'use strict';

// MODULES //

var isPositiveIntegerArray = require( 'validate.io-positive-integer-array' ),
	isPositiveInteger = require( 'validate.io-positive-integer' ),
	zeros = require( './zeros.js' );


// COMPILE //

/**
* FUNCTION: compile( dims )
*	Compiles a function for creating zero-filled arrays.
*
* @param {Number|Number[]} dims - dimensions
* @returns {Function} function for creating zero-filled arrays
*/
function compile( dims ) {
	var isArray;

	isArray = isPositiveIntegerArray( dims );
	if ( !isArray && !isPositiveInteger( dims ) ) {
		throw new TypeError( 'invalid input argument. Dimensions argument must be either a positive integer or a positive integer array. Value: `' + dims + '`.' );
	}
	if ( !isArray ) {
		dims = [ dims ];
	}
	return zeros( dims );
} // end FUNCTION compile()


// EXPORTS //

module.exports = compile;
