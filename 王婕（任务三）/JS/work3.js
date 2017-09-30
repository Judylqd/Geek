$(function(){
	$.ajax({
		type:"GET",
		url:"http://rapapi.org/mockjsdata/14169/geek",
		success:function(data){
			var pagenow=0;
			var pageAll=10;

			/* 显示页数框*/

			//如果5个以内则显示全部页数框
        	if (data.list.length<=5) {
				for ( i = 0; i <data.list.length; i++) {
					var a = i+1;
					$('ul').append("<li>"+a+"</li>");
				}				
			} else { 
				//超过5个则显示5个页数框
				for ( i = 0; i <5; i++) {
					var a = i+1;
					$('ul').append("<li>"+a+"</li>");
				}
			}

			/*最开始默认显示第一页*/

			$('#proFrame').html(data.list[pagenow]);
			$('li:first').addClass("on").show().siblings().removeClass("on");

			/*点击页数框来切换*/

			$('li').click(function(){
				pagenow=$(this).text()-1;
				if (pagenow>1&&pagenow<pageAll-2) {
					console.log(pageAll);
					if ($('li.on')==$('li:eq(2)')) {
						$(this).addClass("on").show().siblings().removeClass("on");
						$('#proFrame').html(data.list[pagenow]);
					} else {
						$('li:eq(2)').text($(this).text())
							 		 .addClass("on").show().siblings().removeClass("on");
						$('li:eq(1)').text(parseInt(pagenow+1)-1);
						$('li:eq(0)').text(parseInt(pagenow+1)-2);
						$('li:eq(4)').text(parseInt(pagenow+1)+2);
						$('li:eq(3)').text(parseInt(pagenow+1)+1);
						$('#proFrame').html(data.list[pagenow]);
					}
				} else if(pagenow==1){
					$('li:eq(1)').text($(this).text())
						 		 .addClass("on").show().siblings().removeClass("on");
					$('li:eq(0)').text(1);
					$('li:eq(2)').text(3);
					$('li:eq(3)').text(4);
					$('li:eq(4)').text(5);
					$('#proFrame').html(data.list[pagenow]);
				} else if (pagenow==pageAll-2) {
					$('li:eq(3)').text($(this).text())
							 		 .addClass("on").show().siblings().removeClass("on");
					$('li:eq(0)').text(parseInt(pagenow+1)-3);
					$('li:eq(1)').text(parseInt(pagenow+1)-2);
					$('li:eq(2)').text(parseInt(pagenow+1)-1);
					$('li:eq(4)').text(parseInt(pagenow+1)+1);
					$('#proFrame').html(data.list[pagenow]);
				} else {
					$(this).addClass("on").show().siblings().removeClass("on");
					$('#proFrame').html(data.list[pagenow]);
				}
			});

			/* 点击上一页*/

			$("#prev").click(function(){
				if(pagenow>0){
					pagenow--;
					if (pagenow>1&&pagenow<pageAll-3) {
						$('li:eq(2)').text(parseInt($('li.on').text())-1)
							 		 .addClass("on").show().siblings().removeClass("on");
						$('li:eq(0)').text(parseInt($('li.on').text())-2);
						$('li:eq(1)').text(parseInt($('li.on').text())-1);
						
						$('li:eq(3)').text(parseInt($('li.on').text())+1);
						$('li:eq(4)').text(parseInt($('li.on').text())+2);
						$('#proFrame').html(data.list[pagenow]);
					} else {
						$('#proFrame').html(data.list[pagenow]);
						$('li.on').prev().addClass("on").show().siblings().removeClass("on");
					}		
				}else{
					alert("已经是第一页");
				}					
			});

			/*点击下一页*/

			$("#next").click(function(){
				if(pagenow<pageAll-1){
					pagenow++;
					if (pagenow>2&&pagenow<pageAll-2) {
						$('li:eq(2)').text(parseInt($('li.on').text())+1)
							 		 .addClass("on").show().siblings().removeClass("on");
						$('li:eq(0)').text(parseInt($('li.on').text())-2);
						$('li:eq(1)').text(parseInt($('li.on').text())-1);
						$('li:eq(3)').text(parseInt($('li.on').text())+1);
						$('li:eq(4)').text(parseInt($('li.on').text())+2);
						$('#proFrame').html(data.list[pagenow]);
					} else {
						$('#proFrame').html(data.list[pagenow]);
						$('li.on').next().addClass("on").show().siblings().removeClass("on");
					}		
				}else{
					alert("已经是最后一页");
				}
			});

			/*点击首页按钮*/

			$("#first").click(function(){
				$('#proFrame').html(data.list[0]);
				$('li:eq(0)').text(1)
						     .addClass("on").show().siblings().removeClass("on");
				$('li:eq(1)').text(2);
				$('li:eq(2)').text(3);
				$('li:eq(3)').text(4);
				$('li:eq(4)').text(5);
			});

			/*点击尾页按钮*/

			$("#last").click(function(){
				$('#proFrame').html(data.list[pageAll-1]);
				$('li:eq(4)').text(pageAll)
							 .addClass("on").show().siblings().removeClass("on");
				$('li:eq(0)').text(pageAll-4);
				$('li:eq(1)').text(pageAll-3);
				$('li:eq(2)').text(pageAll-2);
				$('li:eq(3)').text(pageAll-1);
			});

			/*通过输入页数进行转换*/

			$("#btn").click(function(){	
				pagenow =$("input[type='text']").val()-1;
				$('#proFrame').html(data.list[pagenow]);
				$('li:eq(0)').text(parseInt($("input[type='text']").val())-2);
				$('li:eq(1)').text(parseInt($("input[type='text']").val())-1);
				$('li:eq(2)').text($("input[type='text']").val())
							 .addClass("on").show().siblings().removeClass("on");
				$('li:eq(3)').text(parseInt($("input[type='text']").val())+1);
				$('li:eq(4)').text(parseInt($("input[type='text']").val())+2);
			});
		}	
	})
})		