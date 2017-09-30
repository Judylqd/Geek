window.onload = function(){
	var oBackgr = document.getElementById('backgr');
	var oAdd = document.getElementById('add');
	var oAd = document.getElementById('ad');
	var oSave = document.getElementById('save'); 
 	var oX = document.getElementById('x');
 	var aLi = document.getElementsByTagName('li');
 	var oData = document.getElementById('data');

	//弹出的登录界面
	oAdd.onclick = function(){ //点击添加成员
		oBackgr.style.display = 'block'; //显示灰色界面
		oBackgr.style.height=document.body.scrollHeight + "px"; 
		oAd.style.display = 'block'; //显示表单界面
		 
	}

	oX.onclick = function(){  //点击X退出
		oBackgr.style.display = 'none';
		oAd.style.display = 'none';
	}

	oSave.onclick = function(){ //点击保存添加
		var oEdit1 = document.getElementById('edit1');
	 	var oEdit2 = document.getElementById('edit2');
	 	var oEdit3 = document.getElementById('edit3');
	 	var oEdit4 = document.getElementById('edit4');
	 	var oEdit5 = document.getElementById('edit5');

	 	if(oEdit1.value != '' && oEdit2.value != '' 
			&& oEdit3.value != '' && oEdit4.value != '' 
			&& oEdit5.value != ''){
				alert('保存成功！');
			}
	}


//=========================================================
//工作室成员
//=========================================================
    $('#menber').click(function(){
		$('#menber').addClass("active").siblings().removeClass("active");
		$.ajax({
			type:"GET",
			url:"http://rapapi.org/mockjsdata/25495/member/listCurrentMembers/",
			data:{
					//
			  	},
			dataType:'jsonp',
 			success:function(data){
				var tab = "<table border ='2' style='border-collapse:collapse;table-layout:fixed;text-align:center'>"
	   	    	//第一行
				tab += "<tr height = '30'>";  
					tab += "<td width = '900'>menberId</td>";
					tab += "<td width = '400'>name</td>";
					tab += "<td width = '300'>sex</td>";
					tab += "<td width = '800'>photo</td>";
					tab += "<td width = '800'>direction</td>";
					tab += "<td width = '800'>introduction</td>";
					tab += "<td width = '600'>company</td>";
					tab += "<td width = '900'></td>";
					tab += "<td width = '900'></td>";
				tab += "</tr>";
				//第二行开始
				for(var i=1; i<=5; i++){
					tab += "<tr height = '90'>";
					for(var j = 1; j<=9; j++){
						tab += "<td style = 'word-break:break-all'></td>";
					}
				}
				tab += "</table>";
				oData.innerHTML = tab;

			},
			error:function(){
				alert('请求失败');
			}

		});
	 });

//=========================================================
// 毕业去向
//=========================================================
   
    var oGraduat = document.getElementById('graduat');
	oGraduat.onclick = function(){
		var tab = "<table border ='2' style='border-collapse:collapse;table-layout:fixed;text-align:center'>"
	    //第一行
		tab += "<tr height = '30'>";  
		// for(var j = 1; j<=1; j++){ //循环列
			tab += "<td width = '900'>menberId</td>";
			tab += "<td width = '400'>name</td>";
			tab += "<td width = '300'>sex</td>";
			tab += "<td width = '800'>photo</td>";
			tab += "<td width = '800'>direction</td>";
			tab += "<td width = '800'>introduction</td>";
			tab += "<td width = '600'>company</td>";
			tab += "<td width = '900'></td>";
			tab += "<td width = '900'></td>";
		// }
		tab += "</tr>";
		//第二行开始
		for(var i=1; i<=5; i++){
			tab += "<tr height = '90'>";
			for(var j = 1; j<=9; j++){
				tab += "<td></td>";
			}
		}
		tab += "</table>";
		oData.innerHTML = tab;
	

		for(var i=0; i<aLi.length; i++){
    			aLi[i].className = '';
    		}
		this.className = 'active';
	}

//=========================================================
// 作品展示
//=========================================================
    var oShow = document.getElementById('show');
 	
	oShow.onclick = function(){
		var tab = "<table border ='2'style='border-collapse:collapse;table-layout:fixed;text-align:center'>"
	    //第一行
		tab += "<tr height = '30'>";  
		// for(var j = 1; j<=1; j++){ //循环列
			tab += "<td width = '500'>name</td>";
			tab += "<td width = '1000'>url</td>";
			tab += "<td width = '2000'>introduction</td>";
			tab += "<td width = '800'>effectPicture</td>";
			tab += "<td width = '900'></td>";
			tab += "<td width = '900'></td>";
		// }
		tab += "</tr>";
		//第二行开始
		for(var i=1; i<=5; i++){
			tab += "<tr height = '90'>";
			for(var j = 1; j<=6; j++){
				tab += "<td></td>";
			}
		}
		tab += "</table>";
		oData.innerHTML = tab;
	

		for(var i=0; i<aLi.length; i++){
    			aLi[i].className = '';
    		}
		this.className = 'active';
	}


//=========================================================
// 加入我们
//=========================================================
    var oJion = document.getElementById('join');
     
	oJion.onclick = function(){
		var tab = "<table border ='2'style='border-collapse:collapse;table-layout:fixed;text-align:center'>"
	    //第一行
		tab += "<tr height = '30'>";  
		// for(var j = 1; j<=1; j++){ //循环列
			tab += "<td width = '300'>candidateId</td>";
			tab += "<td width = '200'>name</td>";
			tab += "<td width = '200'>school</td>";
			tab += "<td width = '200'>major</td>";
			tab += "<td width = '500'>direction</td>";
			tab += "<td width = '400'>introduction</td>";
		// }
		tab += "</tr>";
		//第二行开始
		for(var i=1; i<=5; i++){
			tab += "<tr height = '90'>";
			for(var j = 1; j<=6; j++){
				tab += "<td></td>";
			}
		}
		tab += "</table>";
		oData.innerHTML = tab;
	

		for(var i=0; i<aLi.length; i++){
    			aLi[i].className = '';
    		}
		this.className = 'active';
	}


		// var xhr = new XMLHttpRequest();
		// xhr.open('get','http://rapapi.org/mockjsdata/25495/member/listCurrentMembers/',true);
		// xhr.send();
		// xhr.onreadystatechange = function(){
		// 	if(xhr.readyState == 4){
		// 		if( (xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 ){
		// 			alert(xhr.responseText);
		// 		}
		// 		else{
		// 			alert('Request was unsuccessful:' + xhr.state);
		// 		}
		// 	}
		// };

}