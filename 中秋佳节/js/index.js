window.onload = function() {


	//页面1的js
	var ym1 = document.querySelector('.ym1');
	var ym2 = document.querySelector('.ym2');
	var jdt = document.querySelector('#loading');
	var jd = document.querySelector('.ym1-text');
	var t1 = 0;
	var Timer1 = setInterval(function() {
		t1 += 4;
		if (t1 <= 100) {
			jd.innerHTML = t1 + '%';
			jdt.style.width = t1 + '%';
		} else if (t1 > 100) {
			clearInterval(Timer1);
			Goto(ym1, ym2);
		}
	}, 100);


	//页面2的js
	const ym2Btn1 = ym2.querySelector('.ym2_btn1');
	const ym2Btn2 = ym2.querySelector('.ym2_btn2');

	ym2Btn1.addEventListener('click', function() {
		Goto(ym2, p3);

	});
	ym2Btn2.addEventListener('click', function() {
		Goto(ym2, p5);
		console.log(123);
	});

	// p3
	const p3 = document.querySelector('.p3');
	const p32 = document.querySelector('.p32');
	const sec = p3.querySelector('.idbox').querySelector('.sec');
	// 连连看
	const items = p3.querySelectorAll('.item');
	const quit = p3.querySelector('.del');
	const cz = p3.querySelector('.cz');
	const insy = p32.querySelector('.insy');
	const next = p32.querySelector('.next');
	arr = [1, 2, 3, 4, 5, 6];
	// 已翻牌图片索引
	var yf = -1;
	// 已翻牌元素索引
	var yfindex = -1;
	// 计数
	var num = 0;
	
	
	shuffle(arr);
	for (let i = 0; i < items.length; i++) {
		items[i].index = arr[i % 6];
		items[i].flag = false;
		items[i].i = i;
		items[i].addEventListener('click', async function() {
			if(!this.flag){
				this.style.transform = 'rotateY(180deg)';
				this.style.background =
					`url(./img/月饼${this.index}.png) #000 no-repeat center center / 80% 80%`;
				let that = this;
				setTimeout(function() {
					if (yf == -1) {
						yf = that.index;
						yfindex = that.i;
						that.flag = true;
					} else if (yf == that.index) {
						that.flag = true;
						items[yfindex].style.animation = 'itemSc .3s linear alternate 2';
						that.style.animation = 'itemSc .3s linear alternate 2';
						that.style.background = `url(./img/月饼${that.index}.png) rgba(255,255,255,.1) no-repeat center center / 80% 80%`;
						items[yfindex].style.background = `url(./img/月饼${items[yfindex].index}.png) rgba(255,255,255,.1) no-repeat center center / 80% 80%`;
						yf = -1;
						sec.innerText = ++num;
						if (num >= 6) {
							fadeInFlex(p32);
						}
					} else if (yf != that.index) {
						items[yfindex].flag = false;
						yfindex = -1;
						yf = -1;
						for (let i = 0; i < items.length; i++) {
							if (!items[i].flag) {
								items[i].style.transform = 'rotateY(0deg)';
								items[i].style.background = `#000`;
							}
						}
					}
				
				}, 250);
			}

		});
	}

	// 洗牌算法
	function shuffle(arr) {
		for (let i = 0; i < arr.length; i++) {
			let j = Math.floor(Math.random() * (arr.length - i)) + i;
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		

	}
	// 重置按钮
	cz.addEventListener('click', function() {
		shuffle(arr);
		yfindex = -1;
		yf = -1;
		num = 0;
		sec.innerText = num;
		for (let i = 0; i < items.length; i++) {
			items[i].style.transform = 'rotateY(0deg)';
			items[i].style.background = `#000`;
			items[i].flag = false;
			items[i].index = arr[i % 6];
		}
	});
	
	
	// 退出按钮
	quit.addEventListener('click', function() {

		Goto(p3, ym2,function(){
			fadeOut(p32);
		});
		cz.click();

	});
	
	
	// 返回首页按钮
	insy.addEventListener('click', function(){
		Goto(p3,ym2,function(){
			fadeOut(p32);
		});
		cz.click();
	});
	
	
	
	// 下一个按钮
	next.addEventListener('click', function(){
		Goto(p3,ym4,function(){fadeOut(p32);});
		cz.click();
		// 页面4打字机效果
		
		ym4Text.timer = setInterval(function(){
			ym4Text.innerText += ym4text[ym4texti++];
			if(ym4texti >= ym4text.length){
				clearInterval(ym4Text.timer);
				ym4Text.timer = null;
			}
			
		},200);
		
		
	});
	
	
	
	// 页面4的js
	var ym4 = document.querySelector('.ym4');
	var ym4_btn = document.querySelector('.ym4-btn');
	var ym4text = ['拿','上','你','心','爱','的','小','金','币','去','尝','试','一','下','吧','!']
	var ym4texti = 0;
	var ym4Text = ym4.querySelector('.ym4-text').querySelector('p');
	
	ym4_btn.addEventListener('click', function() {
		Goto(ym4, p5);
		ym4Text.innerText = '';
		ym4texti=0;
	})
	
	
	
	

	// p5
	const p5 = document.querySelector('.p5');
	// p51
	const p51 = p5.querySelector('.p51');
	const ksbtn = p51.querySelector('.ksbtn');
	const p5fanhui = p5.querySelector('.fanhui');


	// 娃娃机
	const toubi = p5.querySelector('.wwjbtns1').querySelector('.toubi');
	const Go = p5.querySelector('.wwjbtns1').querySelector('.go');
	const leftBtn = p5.querySelector('.wwjbtns2').querySelector('.left');
	const rightBtn = p5.querySelector('.wwjbtns2').querySelector('.right');
	const jb = p5.querySelector('.jb');
	const zhuaz = p5.querySelector('.zhua');
	const zhu38 = zhuaz.querySelector('.zhu38');
	let startFlag = false;
	const ybs = p5.querySelectorAll('.yba');
	const zhua1 = zhuaz.querySelector('.zhua1');
	const zhua2 = zhuaz.querySelector('.zhua2');
	// 月饼原始位置
	let ysX = [];
	let ysY = [];
	const daojis = p5.querySelector('.daojis');
	let daojisNum = 15;
	
	
	
	
	
	toubi.addEventListener('click', function() {
		jb.style.animationPlayState = 'running';
		startFlag = true;
		fadeOut(this);
		ysX = [ybs[0].offsetLeft,ybs[1].offsetLeft,ybs[2].offsetLeft];
		ysY = [ybs[0].offsetTop,ybs[1].offsetTop,ybs[2].offsetTop];
		
		// 倒计时功能
		daojis.timer = setInterval(function(){
			if(daojisNum-- <= 0){
				// 倒计时为零时
				daojisNum = 0;      // 确保不出现-1的情况
				clearInterval(daojis.timer);
				daojis.timer = null;
				setTimeout(function(){
					Goto(p5,ym61);
				},300);
				zhuaz.style.left = '126px';
				daojisNum = 15;
				daojis.innerText = 15;
				// 清楚定时器, 跳转、重置倒计时 复位爪子
				
			}
			daojis.innerText = daojisNum;
		},1000);
		

	});
	
	ksbtn.addEventListener('click', function() {
		fadeOut(this.parentNode);
		
	
	});
	
	p5fanhui.addEventListener('click', function() {
		clearInterval(daojis.timer);
		daojis.timer = null;
		daojisNum = 15;
		daojis.innerText = 15;
		zhuaz.style.left = '126px';
		// 重置倒计时定时器 复位爪子
		Goto(p5, ym2);
	});
		
	Go.addEventListener('click', function(){
		let speed = 5;
		let ybindex = -1;
		// 每次增长像素值 & 被抓月饼索引
		
		
		if(!startFlag){
			return;
		}
		zhua1.style.transform= 'rotate(-15deg)';
		zhua2.style.transform= 'rotate(15deg)';
		// 开始时 爪子张开
		zhu38.timer = setInterval(function(){
			zhu38.style.height = zhu38.offsetHeight + speed + 'px';
			// 检测爪子是否触底
			if(zhu38.offsetHeight + speed > 335){
				speed = -5;
				zhua1.style.transform= 'rotate(0)';
				zhua2.style.transform= 'rotate(0)';
				// 触底反方向运动 爪子复原
			}
			// 检测爪子是否触碰到月饼
			for(let i = 0;i<ybs.length;i++){
				if(zhuaz.offsetTop + zhuaz.offsetHeight >= ybs[i].offsetTop + (ybs[i].offsetHeight/2) &&
					zhuaz.offsetTop + zhuaz.offsetHeight <= ybs[i].offsetTop + ybs[i].offsetHeight && 
					zhuaz.offsetLeft + (zhuaz.offsetWidth/2) >= ybs[i].offsetLeft &&
					zhuaz.offsetLeft + (zhuaz.offsetWidth/2) <= ybs[i].offsetLeft + ybs[i].offsetWidth){
						speed = -5;
						ybindex = i;
						zhua1.style.transform= 'rotate(0)';
						zhua2.style.transform= 'rotate(0)';
						// 触碰到月饼反方向运动 爪子复原 记录月饼索引
				}
			}
			if(ybindex != -1){
				// 抓到月饼后 月饼跟着一起运动
				ybs[ybindex].style.top = ybs[ybindex].offsetTop + speed + 'px';
			}
			if(zhu38.offsetHeight < 52){
				// 爪子回到原始位置后销毁定时器
				clearInterval(zhu38.timer);
				zhu38.timer = null;
				if(ybindex != -1){
					// 抓到月饼，月饼出货口出货
					ybs[ybindex].style.top = '1030px';
					ybs[ybindex].style.left = '205px';
					ybs[ybindex].style.animation = 'ybM 1s linear forwards';
					yfindex = -1;
					setTimeout(function(){
						zhuaz.style.left = '126px';
						Goto(p5,ym62);
						// 延时1s，等待动画播放完再跳转，
						
					},1000);
				}else {
					// 没抓到月饼时直接跳转
					setTimeout(function(){
						zhuaz.style.left = '126px';
						Goto(p5,ym61);
					},300);
				}
				clearInterval(daojis.timer);
				daojis.timer = null;
				daojisNum = 15;
				daojis.innerText = 15;
				// 重置倒计时定时器
				
			}

		},20);
		
	});
	
	leftBtn.addEventListener('click', function(){
		console.log(11);
		if(!startFlag){
			return;
		}
		if(zhuaz.offsetLeft - 10 <= 116 ){
			return;
		}else {
			zhuaz.style.left = zhuaz.offsetLeft - 10 + 'px';
		}
		
		
		
	});
	
	rightBtn.addEventListener('click', function(){
		if(!startFlag){
			return;
		}
		if(zhuaz.offsetLeft + 10 > 560 ){
			return;
		}else {
			zhuaz.style.left = (zhuaz.offsetLeft + 10) + 'px';
		}
		
	});
	
	function reloadP5(callback){
		startFlag = false;
		jb.style.animationPlayState = 'paused';
		toubi.style.display = 'block';
		toubi.style.opacity = '1';
		for(let i = 0;i<ybs.length;i++){
			ybs[i].style.animation = 'none';
			ybs[i].style.left = ysX[i] + 'px';
			ybs[i].style.top = ysY[i] + 'px';
			console.log(ysX[i],ysY[i]);
		}
		callback && callback();
	}
	
	
	
	
	
	
	// 页面6-1的js
	var ym61 = document.querySelector('.ym6-1');
	var ym61_btn1 = document.querySelector('.ym61-btn1');
	var ym61_btn2 = document.querySelector('.ym61-btn2');
	
	ym61_btn1.addEventListener('click', function() {
		reloadP5(function(){
			Goto(ym61, p3);
		});
		
		
	
	})
	ym61_btn2.addEventListener('click', function() {
	
		reloadP5(function(){
			Goto(ym61, ym2);
		});
	
	})
	
	// 页面6-2的js
	var ym62 = document.querySelector('.ym6-2');
	var ym62_btn1 = document.querySelector('.ym62-btn1');
	var ym62_btn2 = document.querySelector('.ym62-btn2');
	
	ym62_btn1.addEventListener('click', function() {
	
		reloadP5(function(){
			Goto(ym62, p3);
		});
	
	})
	ym62_btn2.addEventListener('click', function() {
	
		reloadP5(function(){
			Goto(ym62, ym2);
		});
	
	})
	
	


	// 音乐
	const yinyue = document.querySelector('.yinyue');
	const audio = document.querySelector('audio');
	yinyue.flag = true;

	yinyue.addEventListener('click', function() {

		if (yinyue.flag) {

			yinyue.flag = false;
			yinyue.style.animationPlayState = 'paused';
			audio.pause();
		} else {
			yinyue.flag = true;
			yinyue.style.animationPlayState = 'running';
			audio.play();
		}

	});

}
