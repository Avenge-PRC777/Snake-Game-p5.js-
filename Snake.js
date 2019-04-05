function Snake(){
	this.x=0;this.y=0;
	this.xspeed=2;this.yspeed=0;
	this.dir=function(x,y){
		this.xspeed=x;this.yspeed=y;
	}
	this.update=function(){
		this.x=this.x+this.xspeed;//dont add scalev here
		this.y=this.y+this.yspeed;//dont add scalev here
		this.x=constrain(this.x,0,width-scalev);
		this.y=constrain(this.y,0,height-scalev);
	}
	this.show=function(){
		fill(255);
		rect(this.x,this.y,scalev,scalev);
	}
}