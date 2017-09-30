window.onload =function(){
	//轮播
	var oBanners =document.getElementById('banners');
	var oUl=oBanners.getElementsByTagName('ul')[0];
	var aLi=oBanners.getElementsByTagName('li');
	var arrUrl=['picture/one.jpg','picture/two.jpg','picture/three.jpg','picture/four.jpg'];
	var oImg =oBanners.getElementsByTagName('img')[0];

	//ajax交互
	var oProFrame = document.getElementById('proFrame');
	var num=0;

	//------轮播--------

		// 定义一个函数---依次放图片
    	function fn1(){
    		num++;
    		if( num ==arrUrl.length){
    			num=0;
    		};
    		oImg.src=arrUrl[num];
     		for (var d = 0; d < aLi.length; d++) {
     			aLi[d].className ='';
      		};
       		aLi[num].className='jj';
   		 };

    	// 通过原点更换图片	

    	for(var i=0;i<arrUrl.length;i++){
     		oUl.innerHTML+='<li></li>';
     	};
    	aLi[num].className='jj';
    	oImg.src=arrUrl[num];
    	for (var i = 0; i < aLi.length; i++) {
    		aLi[i].index=i;
    		aLi[i].onclick=function(){
    	   		oImg.src=arrUrl[this.index];
    	    	for (var i = 0; i < aLi.length; i++) {
    	    		aLi[i].className ='';
        		};
            	this.className='jj';	
        	};	
    	};
    	// 自动转换图片---定时器

    	timer =setInterval(fn1,2000);

    	// 当鼠标放上去，清除定时器

    	oImg.onmouseover =function(){
    		clearInterval(timer);
    	};

    	// 鼠标移开，继续播放

   		oImg.onmouseout=function(){
    		timer =setInterval(fn1,2000);
    	};
	} 