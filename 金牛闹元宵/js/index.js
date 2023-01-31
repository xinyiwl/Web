window.onload = function(){
	
	// p1
	const p1 = document.querySelector('.p1');
	const loadtext = p1.querySelector('.loadtext');
	const p2 = document.querySelector('.p2');
	var num = 0;
	loadtext.timer = setInterval(function(){
		if(num++>=100){
			num = 100;
			clearInterval(loadtext.timer);
			loadtext.timer = null;
			Goto(p1,p2);
		}
		loadtext.innerText = "loading...." + num + "%";
		
		
	},50);
	
	// p2
	const p3 =document.querySelector('.p3');
	const p2btn = p2.querySelector('.btn');
	
	p2btn.addEventListener('click', function(){
		
		Goto(p2,p3);
	});
	
	//p3 
	
	const p4 = document.querySelector('.p4');
	const p3btn = p3.querySelector('.btn');
	
	p3btn.addEventListener('click', function(){
		
		Goto(p3,p4);
		
	});
	
	// p4
	const p5 = document.querySelector('.p5');
	const p4btn = p4.querySelector('.p4btn');
	
	p4btn.addEventListener('click', function(){
		
		FadeInBlock(p5);
		
	});
	// p5
	const p5btn = p5.querySelector('.btn');
	
	p5btn.addEventListener('click', function(){
		
		Goto(p5,p2);
		
	});
	
	// 答题
	const dls = p4.querySelectorAll('.dl');
	const items = p4.querySelectorAll('.item');
	const dati = p4.querySelector('.dati');
	const divs = p4.querySelectorAll('.check');
	const radio = p4.querySelectorAll('input');
	let tm = -1;
	let dan = '';
	const danArr = ['龙井','秦','汕头','目中无人','友','龙腾虎跃'];
	const tjbtn = p4.querySelectorAll('.btn');
	let duiIndex = 0;
	
	
	for(let i = 0;i<dls.length;i++){
		dls[i].addEventListener('click', function(){
			for(let i=0;i<items.length;i++){
				items[i].style.display = 'none';
			}
			items[i].style.display = 'flex';
			FadeInFlex(dati);
			tm = i;
		});
	}
	
		
	for(let i = 0;i<items.length;i++){
		items[i].addEventListener('click', function(e){
			e.stopPropagation();
		});
	}
	
	dati.addEventListener('click', function(){
		FadeOut(dati);
		tm = -1;
		dan = '';
	});
	
	for(let i =0;i<divs.length;i++){
		divs[i].addEventListener('click', function(){
			
			for(let i =0;i<divs.length;i++){
				divs[i].children[0].checked = false;
			}
			this.children[0].checked = true;
			dan = this.innerText;
		});
		
	}
	
	// 错误提示
	const error = p4.querySelector('.error');
	
	for(let i = 0;i<tjbtn.length-1;i++){
		
		tjbtn[i].addEventListener('click', function(){
			
			if(dan.indexOf(danArr[tm])!=-1){
				
				dls[tm].style.background = 'url(./img/dl3.png) no-repeat 0 0 / 100% 100%';
				dls[tm].style.animation = 'none';
				FadeOut(dati, function(){
					dati.style.display = 'none';
				});
				duiIndex++;
				dan = '';
				if(duiIndex==6){
					p4btn.style.animationPlayState = 'running';
				}
			}else {
				
				FadeInBlock(error, function(){
					setTimeout(function(){
						FadeOut(error);
					},1000);
				});
				
			}
			
			
		});
		
	}
	
	
	
	
	
	
}