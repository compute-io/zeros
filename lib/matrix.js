'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' );


// ZEROS //

/**
* FUNCTION: zeros( dims, dt )
*	Creates a zero-filled matrix.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @returns {Matrix} zero-filled matrix
*/
function zeros( dims, dt ) {
	return matrix( dims, dt );
} // end FUNCTION zeros()


// EXPORTS //

module.exports = zeros;
