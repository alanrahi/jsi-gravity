

var updatedArray = function(list) {
for(i=0; i<list.length; i++){
	list[i].age = list[i].age + 1;
}; return list
	
};

module.exports = {
	"updatedArray": updatedArray
	};