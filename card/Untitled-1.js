// JavaScript Document
window.onload=function(){
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	
	var music=document.getElementById("music");
    var audio=document.getElementsByTagName("audio")[0];
	//音乐停止后，唱片停止
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
		//music.style.animationPlayState=paused;
		},false)
	//点击图标后音乐停止
/*	music.onclick=function(){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play")//该方法会使产唱片会到原点
			//this.style.animationPlayState="running";兼容差
			
			}else{
		    audio.pause();
		    this.setAttribute("class","")
			//this.style.animationPlayState="paused";
			}
		}*/
    music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play")//该方法会使产唱片会到原点
			//this.style.animationPlayState="running";兼容差
			
			}else{
		    audio.pause();
		    this.setAttribute("class","")
			//this.style.animationPlayState="paused";
			}
		},false)
		
		page1.addEventListener("touchstart",function(event){
			page1.style.display="none";
			page2.style.display="block"
			page3.style.display="block"
			page3.style.top="100%"
			
			setTimeout(function(){
			page2.setAttribute("class","page fadeout");
			page3.setAttribute("class","page fadeIn");
			},5500);
			},false)
		
		
	}