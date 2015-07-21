'use strict';

// FUNCTIONS //

var ln = Math.log;


// QUANTILE //

/**
* FUNCTION: quantile( p, mu, s )
*	Evaluates the quantile function for a Logistic distribution with location parameter `mu` and scale parameter `s` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Number} evaluated quantile function
*/
function quantile( p, mu, s ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	return mu + s * ln( p / ( 1 - p ) );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
