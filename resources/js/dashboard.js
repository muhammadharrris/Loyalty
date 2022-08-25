window.onload = function () {

    var chart = new CanvasJS.Chart("graphmain-graph", {
        animationEnabled: true,
        axisY :{
            valueFormatString: "#0,.",
            suffix: "k"
        },
        axisX: {
            title: "Months After Launch"
        },
        toolTip: {
            shared: true
        },
        data: [{        
            type: "stackedArea",
            showInLegend: true,
            toolTipContent: "<span style=\"color:#418BC2\"><strong>{name}: </strong></span> {y}",
            name: "iOS",
            color: '#418BC2',
            dataPoints: [
            { x: 1, y: 1000 },
            { x: 2, y: 2000 },
            { x: 3, y: 3000 },
            { x: 4, y: 4000 },
            { x: 5, y: 5000 },
            { x: 6, y: 6000 },
            { x: 7, y: 7000 },
            { x: 8, y: 8000 },
            { x: 9, y: 9000 },
            { x: 10, y:10000 },
            { x: 11, y:11000 }
            ]
        },
        {        
            type: "stackedArea",  
            name: "Android",
            toolTipContent: "<span style=\"color:#F26730\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
            showInLegend: true,
            color: '#F26730',
            dataPoints: [
            { x: 4, y: 4000 },
            { x: 5, y: 6000 },
            { x: 6, y: 9000 },
            { x: 7,y: 14000 },
            { x: 8,y: 21000 },
            { x: 9, y: 31000 },
            { x: 10, y: 46000 },
            { x: 11, y: 61000 }   
            ]
        }]
    });
    chart.render();
    
    }