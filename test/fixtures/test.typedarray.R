options( digits = 16 );
library( jsonlite );


mu = 0
s = 1
probs = seq( 0, 1, 0.1 )
y = qlogis( probs, mu, s )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	s = s,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/typedarray.json" )
