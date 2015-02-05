
var util = require( "util" ) ;

var f = function ( x ) {
	return x < 3 ;
} ;

var F = predicate.negation( f ) ;

var one = function ( x ) {
	deepEqual( F( x ) , !f( x ) , util.format("F( %s ) === !f( %s )" , x , x ) ) ;
} ;

test( "negation" , function ( ) {

	one( 1 ) ;
	one( 2 ) ;
	one( 3 ) ;
	one( 4 ) ;

} ) ;
