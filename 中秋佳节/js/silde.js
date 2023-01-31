var flag = true;


function fadeInBlock(obj){
	if(flag){
		flag = false;
		let n=0;
		obj.style.display = 'block';
		obj.timer = setInterval(function(){
			n+=0.1;
			if(n>=1){
				clearInterval(obj.timer);
				obj.timer = null;
				flag = true;
				
			}
			obj.style.opacity = n;
			
		},50);
		
	}
	
}

function fadeInFlex(obj){
	if(flag){
		flag = false;
		let n=0;
		obj.style.display = 'flex';
		obj.timer = setInterval(function(){
			n+=0.1;
			if(n>=1){
				clearInterval(obj.timer);
				obj.timer = null;
				flag = true;
				
			}
			obj.style.opacity = n;
			
		},50);
		
	}
	
}

function fadeOut(obj){
	if(flag){
		flag = false;
		let n=1;
		obj.timer = setInterval(function(){
			n-=0.1;
			if(n<=0){
				clearInterval(obj.timer);
				obj.timer = null;
				obj.style.display = 'none';
				flag = true;
			}
			obj.style.opacity = n;
			
		},50);
		
	}
	
}

   function Goto(obj1,obj2,callback){
   	if(flag){
   		flag = false;
   		let n=1,nn=0;
   		obj1.timer = setInterval(function(){
   			n-=0.1;
   			if(n<=0){
   				clearInterval(obj1.timer);
   				obj1.timer = null;
   				obj1.style.display = 'none';
   				
   			}
   			obj1.style.opacity = n;
   		},50);
   		obj2.style.display = 'block';
   		obj2.timer = setInterval(function(){
   			nn+=0.1;
   			if(nn>=1){
   				clearInterval(obj2.timer);
   				obj2.timer = null;
   				flag = true;
				callback && callback();
   			}
   			obj2.style.opacity = nn;
   		},50);
   		
   	}
   	
   }
