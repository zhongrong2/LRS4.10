$(function () {
    $("#save").click(function () {
        var oldpass = $(".oldPass").val();
        var pass1 = $(".newPass").val();
        var pass2 = $(".newPass2").val();
        var datas = [oldpass,pass1,pass2];
        var number = /(^[0-9]{6}$)/;//数字正则

        if (oldpass.length == 0){
            $.myToast("请输入旧密码");
            return false;
        }
        if (!number.test(oldpass)){
            $.myToast("请输入6位数字密码");
            return false;
        }
        if (pass1.length == 0){
            $.myToast("请输入新密码");
            return false;
        }
        if (!number.test(pass1)){
            $.myToast("请输入6位数字密码");
            return false;
        }
        if (pass2.length == 0){
            $.myToast("请确认密码");
            return false;
        }
        if (pass1 !== pass2){
            $.myToast("两次输入密码不一致");
            return false;
        }

        console.log(datas);
        //发送数据
        $.ajax({
            url:"aaaaaaaaaaa",
            method:"post",
            data:"datas",
            dataType:"json",
            success:function (data) {

            },
            error:function () {

            }
        });
        return true;

    })
})