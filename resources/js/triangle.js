window.onload = function () {

    var chart = new CanvasJS.Chart("triangleContainer", {
        animationEnabled: true,
        // exportEnabled: true,
        // title:{
        //     text: "Product Manufacturing Expenses"
        // },
        data: [{
            type: "pyramid",
            indexLabelFontSize: 18,
            valueRepresents: "area",
            showInLegend: true,
            legendText: "{indexLabel}",
            toolTipContent: "<b>{indexLabel}:</b> {y}%",
            dataPoints: [
                { y: 20, indexLabel: "New Members" },
                { y: 80, indexLabel: "Check-ins screen" }
            ]
        }]
    });
    
    chart.render();
    
    }