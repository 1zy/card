// JavaScript Document
var starObj=function(){
	this.x;
	this.y;
	
	this.starNo;//数量
	this.timer;//时间间隔多少到下一帧；
	
	this.xspd;
	this.yspd;
	
	}



starObj.prototype.init=function(){
	this.x=Math.random()*600+100;
	this.y=Math.random()*300+150;
	
	this.starNo=Math.floor(Math.random()*7);//7帧中的任意一帧
	this.timer=0;
	
	this.xspd=Math.random()*3-1.5;
	this.yspd=Math.random()*3-1.5;
	}
	
starObj.prototype.update=function(){
	this.x+=this.xspd*deltaTime*0.00001;
	this.y+=this.yspd*deltaTime*0.00001;
	this.timer+=deltaTime//与时间间隔同步；
	//超出范围重生；
	if(this.x<100||this.x>700){
		this.init();
		return;
		}
		
	if(this.y<150||this.y>450){
		this.init();
		return;
		}
	
	if(this.timer>50){
		this.starNo+=1;
		this.starNo%=7
		this.timer=0;
	   }
	}	
	
starObj.prototype.draw=function(){
	//dramImage(img,sx,sy,sw,sh,x,y,w,h)
	//ctx.drawImage(star,this.x,this.y);
	ctx.save();
	ctx.globalAlpha=live;
	ctx.drawImage(star,this.starNo*7,0,7,7,this.x,this.y,7,7);
	ctx.restore();
	}
function drawStars(){
	for(var i=0;i<num;i++){
		stars[i].draw();
		stars[i].update();
		}
	
	}
	
function aliveUpdate(){
	if(switchs){
		live+=0.03*deltaTime*0.05;
		if(live>1){
			live=1;
			
			}
		}else{
		live-=0.03*deltaTime*0.05;
		if(live<0){
			live=0;
			}	
			}
	}