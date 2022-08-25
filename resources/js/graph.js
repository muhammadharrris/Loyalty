window.onload = function () {

    var chart = new CanvasJS.Chart("graphmain-graph", {
        animationEnabled: true,
        title:{
            text: "Cumulative App Downloads on iTunes and Play Store"
        },
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
            toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
            name: "iOS",
            dataPoints: [
            { x: 1, y: 3000 },
            { x: 2, y: 7000 },
            { x: 3, y: 10000 },
            { x: 4, y: 14000 },
            { x: 5, y: 23000 },
            { x: 6, y: 31000 },
            { x: 7, y: 42000 },
            { x: 8, y: 56000 },
            { x: 9, y: 64000 },
            { x: 10, y: 81000 },
            { x: 11, y: 105000 }
            ]
        },
        {        
            type: "stackedArea",  
            name: "Android",
            toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
            showInLegend: true,
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