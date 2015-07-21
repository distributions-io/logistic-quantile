options( digits = 16 );
library( jsonlite );

mu = 0
s = 1.5
probs = 0:24 / 25
y = qlogis( probs, mu, s )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	s = s,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
