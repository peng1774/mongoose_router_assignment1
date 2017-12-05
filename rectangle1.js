// exports.perimeter = (x, y) => (2*(x+y));
// exports.area = (x, y) => (x*y);

module.exports = (x,y,callback1) => {
	if (x <= 0 || y <= 0)
		setTimeout(() =>
			callback1(new Error("rectangle dimentions should be greater than zero : l = " 
				+ x + ", and b = " + y), null),
			2000
		);
	else
		setTimeout(() => 
			callback1(null, {
				perimeter: () => (2*(x+y)),
				area:() => (x*y)
			}),
			2000
		);
}