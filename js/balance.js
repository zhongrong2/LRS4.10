// 柱形图
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("middleEchart"));
// 指定图表的配置项和数据
var option = {
    tooltip:{
        show:true,
        trigger:'item',
        axisPointer:{
            type:'shadow',
            axis:'auto',
        },
        padding:5,
        textStyle:{
            color:'#161616',
        },
    },
    grid:{
        show:false,
        top:60,
        left:'20%',
        right:'20%',
        bottom:30,
        containLabel:false,
        tooltip:{
            show:true,
            trigger:'item',
            textStyle:{
                color:'#666',
            }
        }
    },
    xAxis:{
        show:true,
        position:'bottom',
        offset:0,
        type:'category',
        name:'月份/月',
        nameLocation:'end',
        nameTextStyle:{
            color:'#161616',
            padding:[5,0,0,-5],
        },
        nameGap:15,
        axisLine:{
            show:true,
            symbol:['none','arrow'],
            symbolSize:[8,8],
            symbolOffset:[0,7],
            lineStyle:{
                color:'#161616',
                width:1,
                type:'solid',
            },
        },
        axisTick:{
            show:true,
            inside:true,
            lengt:3,
            lineStyle:{
                width:1,
                type:'solid',
            },
        },
        axisLabel:{
            show:true,
            inside:false,
            rotate:0,
            margin:5,
        },
        splitLine:{
            show:false,
            lineStyle:{
                color:'red',
                width:1,
                type:'solid',
            },
        },
        splitArea:{
            show:false,
        },
        data: [],//内容
    },
    yAxis:{
        show:true,
        position:'left',
        offset:0,
        type:'value',
        name:'金额/元',
        nameLocation:'end',
        nameTextStyle:{
            color:'#161616',
            padding:[5,0,0,-5],
        },
        nameGap:15,
        axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            symbolSize: [8, 8],
            symbolOffset: [0, 7],
            lineStyle: {
                color: '#161616',
                width: 1,
                type: 'solid',
            },
        },
        axisTick:{
            show:true,
            inside:true,
            lengt:3,
            lineStyle:{
                width:1,
                type:'soild',
            },
        },
        axisLabel:{
            show:true,
            inside:false,
            rotate:0,
            margin:8,
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#666',
                width:1,
                type:'dashed',
            },
        },
        splitArea:{
            show:false,
        },
    },
    series:[
        {
            name:'消费',
            type:'bar',
            legendHoverLink:true,
            label:{
                show:false,
                position:'insideTop',
                rotate:0,
                color:'#eee',
            },
            itemStyle:{
                color:'#325CEC',
                barBorderRadius:[18,18,0,0],
            },
            barWidth:'20',
            barCategoryGap:'20%',
            data: [],
        },
    ],
}
    myChart.setOption(option);
// 加载柱形数据
$.ajax({
    url:"echart.json",
    method:"get",
    async:false,
    cache:false,
    success:function (data) {
        console.log(data);
        myChart.setOption({
            xAxis: {data:data.Time},
            series:[{data:data.Data}]
        })
    },
    error:function (error) {
        console.log(error);
    }
});

// 图表自适应
$(function () {
    window.onresize = myChart.resize;
})