'use strict';

var zeros = require( './../lib' ),
	arr;

// 2x1x2:
arr = zeros( [2,1,3] );
console.log( arr );

// 5x5x5:
arr = zeros( [5,5,5] );
console.log( arr );

// 10x5x10x20:
arr = zeros( [10,5,10,20] );
console.log( JSON.stringify( arr ) );
