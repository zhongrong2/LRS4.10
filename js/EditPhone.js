$(function () {
    // 点击获取验证码
    $("#save").click(function () {
        var oldPhone = $(".OldPhone").text();
        var newPhone = $(".newPhone").text();
        console.log(newPhone);
        if (oldPhone == ""){
            $.myToast("请输入手机号");
        }else{
            if(newPhone == ""){
                $.myToast("请输入新手机号");
            }else{
                $.ajax({
                    url:"",
                    method:"post",
                    data:"newPhone",
                    dataType:"json",
                    success:function () {

                    }
                })
            }
        }

    })
})