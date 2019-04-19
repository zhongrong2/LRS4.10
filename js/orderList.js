$(function () {
    $.ajax({
        url:"data.json",
        method:"get",
        dataType:"json",
        success:function (data) {
            console.log(data);
        }
    })
})