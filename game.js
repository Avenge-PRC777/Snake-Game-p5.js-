var s;
var scalev=10;//global variable for all scriptss
function setup(){
	createCanvas(600,600);
    s=new Snake();
  //  frameRate(10);
}
function draw(){
background(51);
s.update();
s.show();
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		s.dir(0,-2);
	}
	else if(keyCode==DOWN_ARROW){
		s.dir(0,2);
	}
	else if(keyCode==RIGHT_ARROW){
		s.dir(2,0);
	}
	else if(keyCode==LEFT_ARROW){
		s.dir(-2,0);
	}
}