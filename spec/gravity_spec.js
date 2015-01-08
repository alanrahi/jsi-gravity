var fns = require('../index');

// describe("gravity", function() {
//   it("is a fundamental law, so tautologies had better work", function() {
//     expect(true).toBe(true);
//     expect(false).toBeFalsy();
//     expect(0).toBeLessThan(1);
//     expect(1).not.toBeLessThan(0);
//   });
// });

describe("fallingTime", function() {
	it("should tell how long it takes to fall x meters", function() {
		expect(fns.fallingTime(10)).toBeCloseTo(1.43, 2);
	
	});
});	

