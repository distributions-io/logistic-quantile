'use strict';

// MODULES //

var partial = require( './partial.js' );


// QUANTILE //

/**
* FUNCTION: quantile( out, matrix, mu, s )
*	Evaluates the quantile function for a Logistic distribution with location parameter `mu` and scale parameter `s` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Matrix} output matrix
*/
function quantile( y, x, mu, s ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'quantile()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( mu, s );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
