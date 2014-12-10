Zeros
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates an array of zeros.


## Installation

``` bash
$ npm install compute-zeros
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var zeros = require( 'compute-zeros' );
```

#### zeros( dims[, type] )

Creates an `array` of zeros. The `array` dimensions are specified via an input `array`.

``` javascript
var arr = zeros( [2,1,2] );
/* returns
	[
		[
			[0,0]
		],
		[
			[0,0]
		]
	]
*/
```


## Examples

``` javascript
var arr;

// 5x5x5:
arr = zeros( [5,5,5] );
console.log( arr );

// 10x5x10x20:
arr = zeros( [10,5,10,20] );
console.log( arr );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-zeros.svg
[npm-url]: https://npmjs.org/package/compute-zeros

[travis-image]: http://img.shields.io/travis/compute-io/zeros/master.svg
[travis-url]: https://travis-ci.org/compute-io/zeros

[coveralls-image]: https://img.shields.io/coveralls/compute-io/zeros/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/zeros?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/zeros.svg
[dependencies-url]: https://david-dm.org/compute-io/zeros

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/zeros.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/zeros

[github-issues-image]: http://img.shields.io/github/issues/compute-io/zeros.svg
[github-issues-url]: https://github.com/compute-io/zeros/issues
