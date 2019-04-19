$(function () {
    $(".sure").click(function () {
        var phone = $("#phone").val();
        var code = $("#code").val();
        var refPhone = $("#refPhone").val();
        var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
        var datas = [phone,code,refPhone];

        // 判断手机号不为空
        if (phone.length == 0){
            $.myToast("请输入手机号码");
            return false;
        }
        // 判断手机格式
        if (!phoneReg.test(phone)) {
            $.myToast("请输入有效手机号码");
            return false;
        }
        //判断手机验证码不为空
        if (code.length == 0){
            $.myToast("请输入手机验证码");
            return false;
        }
        // 判断推荐人手机格式
        if(refPhone.length != 0){
            if (!phoneReg.test(refPhone)){
                $.myToast("推荐人手机号错误");
                return false;
            }
        }
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