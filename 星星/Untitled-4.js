// JavaScript Document
var can;
var ctx;

var w;
var h;

var star=new Image();
var girl=new Image();

var num=60;
var stars=[];

var switchs=false;
var live=0;

var lastTime;//上一次刷新的时间；
var deltaTime//两次间隔的时间；当前帧与上一帧的时间间隔

function init(){//定义的元素一开始的状态
	can=document.getElementById("canvas");
	ctx=can.getContext("2d");
	
	w=can.width;
	h=can.height;
	
	document.addEventListener("mousemove",mousemove,false);//事件监听；
	
	girl.src="./src/girl.jpg";
	star.src="./src/star.png";
	
	for(var i=0;i<num;i++){
		var obj=new starObj();//定义吧类放到stars中；
		stars.push(obj);
		stars[i].init()
		}
	lastTime=Date.now();//当前的时间
	
	gameloop()

	}
document.body.onload=init
function gameloop(){//所有需要动的元素即每次需要更新的
	window.requestAnimFrame(gameloop);//每帧循环；
	
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	
	drawBackground();
	drawGile();
	drawStars();
	
	aliveUpdate();
	}


function drawBackground(){
	ctx.fillStyle="#393550";
	ctx.fillRect(0,0,w,h);
	}
	
function drawGile(){
	ctx.drawImage(girl,100,150,600,300)
	
	}
	
	
	
function mousemove(e){
	if(e.offsetX||e.layerX){//如果鼠标发生移动
	  var px=e.offsetX==undefined?e.layerX:e.offsetX;
	  var py=e.offsetY==undefined?e.layerY:e.offsetY;
		if(px>100&&px<700&&py>150&&py<450){
			switchs=true;
			
			}else{
				switchs=false
				}
		}
	
	
	}