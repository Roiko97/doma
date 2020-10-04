// 指定图表的配置项和数据
option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '历史操作次数图',
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name:'操作次数',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(33, 99, 255)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            // data: data
        }
    ]
};

var myChart = echarts.init(document.getElementById('echat'));

// $.ajax({
//     type:'post',
//     url:"http://localhost:8989/track/getTrack",
//     dataType:'json',
//     data: {
//         sessionId: getCookie(),
//     },
//     success: function (response) {
//         option.xAxis.data = response.xAxis;
//         option.series[0].data = response.series;
//
//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option);
//     },
//     error: function (err){
//         console.log(getCookie());
//     }
// });
