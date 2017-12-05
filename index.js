var rect = require('./rectangle1');

// function solveRect(l,b) {
// 	console.log("Solving for rectangle with l = " + l + " and b = " + b);
// 	if (l <= 0 || b <= 0) {
// 		console.log("Rectangle dimensions should be greater than zero: l = " + l + ", and b = " + b);
// 	}
// 	else {
// 		console.log("The area of the rectangle is " + rect.area(l,b));
// 		console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
// 	}
// }
function solveRect(l,b){
	console.log("solving for rectangle with given dimensions");
	rect(l,b,(err,rectangle11) => {
		if(err){
			console.log("error: ",err.message);
		}
		else{
			console.log("area is " + rectangle11.area());
			console.log("perimeter is " + rectangle11.perimeter());
		}
	});
	console.log("this statement after the call of rect()");
};

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
