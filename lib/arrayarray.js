'use strict';

// MODULES //

var recurse = require( './recurse.js' );


// ZEROS //

/**
* FUNCTION: zeros( dims )
*	Creates a zero-filled multidimensional array.
*
* @param {Number[]} dims - dimensions
* @returns {Array} zero-filled multidimensional array
*/
function zeros( dims ) {
	return recurse( dims, 0 );
} // end FUNCTION zeros()


// EXPORTS //

module.exports = zeros;
