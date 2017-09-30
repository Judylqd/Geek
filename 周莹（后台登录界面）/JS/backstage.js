$(function(){
	$(".button").click(function(){
		var username=$("#username").val();
		var password=$("#password").val();
	$.ajax({
		type:"post",
		url:" http://rapapi.org/mockjs/25495/management/login",
		dataType:"json",
		data:{"username":username,"password":password},
		success:function(json){
			if(json.status=="false"){
				alert("账号或密码错误");
			}
		}
	});
})
})