TODO
====

1. ndarray/typed support
	-	what does this mean for multiple dimensions?
		-	single linear array? (strided)
			-	if so, then dims is only meaningful insofar as to determine the total number of elements
		-	or array of ndarrays/typed arrays?
2. validate.io validators
	-	positive integer array
3. what about code generation rather than recursion?
	-	 benchmark
4. fcn options
	
	``` javascript
	var opts = {
		'type': 'float64',
		'strided': <true|false|'ndarray'>
	};
	```

5. see ndarray-zeros and ndarray-scratch
6. same concerns apply for `ones` and `fill`
7. update node modules
8. update travis.yml
9. update tests
10. Fast element concern is only for general arrays
11. 
