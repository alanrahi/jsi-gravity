function each (list,func) {
	var result = []
	for(i=0;i<list.length;i++){
		result[i]=func(list[i]);}
		return result
}







module.exports = {
	"each": each
};


//var each = function(list, someCallback)