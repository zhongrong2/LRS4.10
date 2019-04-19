$(function () {
    $.ajax({
        url:"data.json",
        method:"get",
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".userName").text(data.userName);
            $(".Name").text(data.Name);
            $(".sex").text(data.sex);
            $(".phone").text(data.phone);
            $("#carnum1").val(data.carnum1);
            $("#carnum2").val(data.carnum2);
            $("#carnum3").val(data.carnum3);
        }
    })


    // 展示性别选择
    $(".SexBox").click(function (e) {
        closePro();
        $(".showBox").css("display","block");
        $(".ShowsexBox").animate({
            bottom:0,
        },200)
        e.stopPropagation();
    })
    $(".showBox").click(function (e) {
        $(".showBox").css("display","none");
        $(".ShowsexBox").animate({
            bottom:-100,
        },200)
        e.stopPropagation();
    })
    // 选择性别
    $(".ShowsexBox li").click(function (e) {
        var chose = $(this).html();
        console.log(chose);
        $(".sex").html(chose);

        $(".showBox").css("display","none");
        $(".ShowsexBox").animate({
            bottom:-100,
        },200)
        e.stopPropagation();
    })

    // 保存数据
    $(".save").click(function () {
        var userName = $(".userName").text();
        var Name = $(".Name").text();
        var sex = $(".sex").text();
        var phone = $(".phone").text();
        var carnum1 = $("#carnum1").val();
        var carnum2 = $("#carnum2").val();
        var carnum3 = $("#carnum3").val();
        var data = [userName,Name,sex,phone,carnum1,carnum2,carnum3];
        console.log(data);
        $.ajax({
            url:"",
            method:"post",
            data:"data",
            dataType:"json",
            success:function () {
                window.location.href="member.html";
                setTimeout(function () {
                    $.myToast("修改成功");
                },3000);
            }
        })

    })

    // 关闭键盘
    $("#content").click(function () {
        closePro();
    });
})
