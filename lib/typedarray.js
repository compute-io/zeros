'use strict';

// MODULES //

var ctors = require( 'compute-array-constructors' );


// ZEROS //

/**
* FUNCTION: zeros( len, dt )
*	Creates a zero-filled typed array.
*
* @param {Number} len - array length
* @param {String} dt - data type
* @returns {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} zero-filled typed array
*/
function zeros( len, dt ) {
	/* jshint newcap:false */
	var ctor = ctors( dt );
	if ( ctor === null ) {
		throw new Error( 'zeros()::invalid value. Data type does not have a corresponding array constructor. Value: `' + dt + '`.' );
	}
	return new ctor( len );
} // end FUNCTION zeros()


// EXPORTS //

module.exports = zeros;
