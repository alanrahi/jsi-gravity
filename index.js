//var time = fallingTime(20);

var height = 10;
var gravity = 9.8;



var fallingTime = function(height) {
var time = Math.sqrt(2*height/gravity);

return time;
};
console.log("it will take " + fallingTime(height) + " seconds to fall " + height + " meters.");

module.exports = fallingTime;