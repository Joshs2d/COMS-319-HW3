var Started = false;
var movement = 2;

var update_loop = setInterval(loop, 100);

//snake head current location = x and y
//snake head next location = dx and dy
//directions =   0    1      2     3 
//               up  right  down  left

var x = 3;
var y = 150;
var dx = movement;
var dy = 0;
var dir = 1;
 
function StartProg(){
	var startbtn = document.getElementById("startbtn");
	if(!Started){
		startbtn.value = "Stop";
		Started = true;
	}else{
		startbtn.value = "Start";
		Started = false;
	} 
}

function turnRight(){
	if(dir == 0){
		dir = 3;
		dy=0;
		dx = (-movement);
	}else if(dir == 1){
		dir = 0;
		dy = movement;
		dx = 0;
	}else if(dir == 2){
		dir = 1;
		dy= 0;
		dx = movement;
	}else if(dir == 3){
		dir = 2;
		dy=(-movement);
		dx = 0;
	}
}

function turnLeft(){
	if(dir == 0){
		dir = 1;
		dy= 0;
		dx = movement;
	}else if(dir == 1){
		dir = 2;
		dy=(-movement);
		dx = 0;
	}else if(dir == 2){
		dir = 3;
		dy=0;
		dx = (-movement);
	}else if(dir == 3){
		dir = 0;
		dy = movement;
		dx = 0;
	}
}

function loop(){
	//stops at a wall, when the head touches its body, or when clicking the stop button
	if(Started){
		if(y == 293 || y == 2 || x == 293 || x == 2){StartProg();}
		x += dx;
		y += dy;
	
		//Example of printing out rectangles
		var canvas = document.getElementById('GameWindow');
		var context = canvas.getContext('2d');
		context.fillStyle = "#ffc821";
		context.rect(x,y,5,5);
		context.fill();
	}	
}
