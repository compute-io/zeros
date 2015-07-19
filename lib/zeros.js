/* jshint evil:true */
'use strict';

/**
* FUNCTION: createZeros( dims )
*	Returns a function to create a zero-filled multidimensional array.
*
* @param {Number[]} dims - dimensions
* @returns {Function} function to create a zero-filled multidimensional array
*/
function createZeros( dims ) {
	var ndims = dims.length,
		len,
		fcn,
		n,
		i;

	// Code generation. Create variables...
	n = ndims - 1;
	fcn = 'var ';
	for ( i = 0; i < ndims; i++ ) {
		fcn += 'i' + i + ',o' + i;
		if ( i < n ) {
			fcn += ',';
		} else {
			fcn += ';';
		}
	}
	// => var i0,o0,i1,o1,i2,o2,...,iN,oN;

	// Create the nested for loops...
	for ( i = 0; i < ndims; i++ ) {
		len = dims[ i ];

		// When initializing arrays, ensure fast elements...
		fcn += 'o' + i + '=';
		if ( len < 64000 ) {
			fcn += 'new Array(' + len + ')';
		} else {
			fcn += '[]';
		}
		fcn += ';';
		// => e.g., o1=new Array(10);

		fcn += 'for(i' + i + '=0;i' + i + '<' + len + ';i' + i + '++){';
		// => e.g., for(i0=0;i0<10;i++){
	}
	/* => e.g.,

		o0 = new Array( 1 );
		for ( i0 = 0; i0 < 1; i0++ ) {
			o1 = [];
			for ( i1 = 0; i1 < 64000; i1++ ) {
				o2 = new Array( 2 );
				for ( i2 = 0; i2 < 2; i2++ ) {
					...
	*/

	// Create the code which assigns the value zero...
	i = ndims - 1;
	fcn += 'o' + i;
	if ( len < 64000 ) {
		fcn += '[i' + i + ']=0;';
	} else {
		fcn += '.push(0);';
	}
	// => o2[i2]=0;  OR  o2.push(0);

	// Create the code which assigns nested arrays...
	for ( i = ndims-2; i >= 0; i-- ) {
		fcn += '}';
		fcn += 'o' + i;
		len = dims[ i ];
		n = i + 1;
		if ( len < 64000 ) {
			fcn += '[i' + i + ']=o' + n + ';';
			// => o1[i1]=o2;
		} else {
			fcn += '.push(o' + n + ');';
			// => o1.push(o2);
		}
	}
	// Tidy up:
	fcn += '}';
	/* => e.g.,
				...
					o2[ i2 ] = 0;
				}
				o1.push( o2 );
			}
			o0[ i0 ] = o1;
		}
	*/

	// Return the array:
	fcn += 'return o0;';

	// Create a new function:
	return new Function( fcn );
	/* => e.g.,
		function zeros() {
			var i0, o0, i1, o1, i2, o2;
			o0 = new Array( 1 );
			for ( i0 = 0; i0 < 1; i0++ ) {
				o1 = [];
				for ( i1 = 0; i1 < 64000; i1++ ) {
					o2 = new Array( 2 );
					for ( i2 = 0; i2 < 2; i2++ ) {
						o2[ i2 ] = 0;
					}
					o1.push( o2 );
				}
				o0[ i0 ] = o1;
			}
			return o0;
		}
	*/
} // end FUNCTION createZeros()


// EXPORTS //

module.exports = createZeros;
