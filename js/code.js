	// <script src="jquery-3.3.1.min.js"></script>
  		 
		// <script>
			var phoneReg = /^1[0-9]{10}$/;//手机号正则 
			var count = 60; //间隔函数，1秒执行
			var InterValObj1; //timer变量，控制时间
			var curCount1;//当前剩余秒数
			/*第一*/
			function sendMessage1() {
				curCount1 = count;		 		 
				var phone = $.trim($('#phone').text());
				if (!phoneReg.test(phone)) {
					// alert(" 请输入有效的手机号码");
                    $.myToast("请输入有效的手机号码");
					return false;
				}
				//设置button效果，开始计时
				$("#code").attr("disabled", "true");
				$("#code").text( + curCount1 + "秒再获取");
				InterValObj1 = window.setInterval(SetRemainTime1, 1000); //启动计时器，1秒执行一次
				//向后台发送处理数据
					 
			}
			function SetRemainTime1() {
				if (curCount1 == 0) {                
					window.clearInterval(InterValObj1);//停止计时器
					$("#code").removeAttr("disabled");//启用按钮
					$("#code").text("重新发送");
				}
				else {
					curCount1--;
					$("#code").text( + curCount1 + "秒再获取");
				}
			} 
			
			/*提交*/
			function binding(){
				alert(1)
			}
		// </script>