

var fns = require('../arrayOfpeople');

var list1 = [
{name: "bob1", age: 20},
{name: "bob2", age: 20},
{name: "bob3", age: 20}
]

var list2 = [
{name: "bob1", age: 21},
{name: "bob2", age: 21},
{name: "bob3", age: 21}
]

describe("updatedArray", function() {
	it("should update all persons ages by one", function() {
		expect(fns.updatedArray(list1)).toEqual(list2);})


})