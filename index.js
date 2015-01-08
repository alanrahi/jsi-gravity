//var time = fallingTime(20);

var height = 10;
var gravity = 9.8;



var fallingTime = function(height) {
var time = Math.sqrt(2*height/gravity);

return time;
};
console.log("it will take " + fallingTime(height) + " seconds to fall " + height + " meters.");

var time = Math.sqrt(2*height/gravity);

var distanceFallen = function(time) {

var distance = Math.pow(time, 2)*gravity/2;
return distance
};

console.log(distanceFallen(time));

module.exports = {
	"fallingTime": fallingTime,
	"distanceFallen": distanceFallen
}; 