

var fns = require('../callBack');

list1 = [
"b",
"b",
"b"
]

list2 = [
"baaaa",
"baaaa",
"baaaa"
]

function thing(list1) {
	return list1 + "aaaa";
}


describe("each", function() {
	it("should run callback for each element of the array", function() {
		expect(fns.each(list1, thing)).toEqual(list2);})


})