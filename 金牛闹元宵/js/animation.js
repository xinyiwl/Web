var flag = true;

function Goto(obj1,obj2){
	if(flag){
		flag = false;
		let a = 0;
		let n = 1;
		obj2.style.display = 'block';
		obj1.timer = setInterval(function(){
			n-=0.1;
			if(n<=0){
				clearInterval(obj1.timer);
				obj1.timer = null;
				obj1.style.display = 'none';
				flag = true;
			}
			obj1.style.opacity = n;
			
		},100);
		obj2.timer = setInterval(function(){
			a+=0.1;
			if(a>=1){
				clearInterval(obj2.timer);
				obj2.timer = null;
			}
			obj2.style.opacity = a;
			
		},100);
		
	}
	
}


function FadeOut(obj,callback){
	
	if(flag){
		flag = false
		let n=1;
		obj.timer = setInterval(function(){
			n-=0.1;
			if(n<=0){
				clearInterval(obj.timer);
				obj.timer = null;
				obj.style.display = 'none';
				flag = true;
				callback && callback();
			}
			obj.style.opacity = n;
			
		},50);
	}
	
}

function FadeInBlock(obj,callback){
	
	if(flag){
		flag = false
		let n=0;
		obj.style.display = 'block';
		obj.timer = setInterval(function(){
			n+=0.1;
			if(n>=1){
				clearInterval(obj.timer);
				obj.timer = null;
				flag = true;
				callback && callback();
			}
			obj.style.opacity = n;
			
		},50);
	}
	
}

function FadeInFlex(obj,callback){
	
	if(flag){
		flag = false
		let n=0;
		obj.style.display = 'Flex';
		obj.timer = setInterval(function(){
			n+=0.1;
			if(n>=1){
				clearInterval(obj.timer);
				obj.timer = null;
				flag = true;
				callback && callback();
			}
			obj.style.opacity = n;
			
		},50);
	}
	
}