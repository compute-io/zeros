'use strict';

/**
* FUNCTION: zeros( len )
*	Creates a zero-filled array.
*
* @param {Number} len - array length
* @returns {Number[]} zero-filled array
*/
function zeros( len ) {
	var out,
		i;

	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
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
} // end FUNCTION zeros()


// EXPORTS //

module.exports = zeros;
