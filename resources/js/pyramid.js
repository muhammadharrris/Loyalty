window.onload = function () {

	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Product Manufacturing Expenses"
		},
		data: [{
			type: "pyramid",
			indexLabelFontSize: 18,
			valueRepresents: "area",
			showInLegend: true,
			legendText: "{indexLabel}",
			toolTipContent: "<b>{indexLabel}:</b> {y}%",
			dataPoints: [
				{ y: 30, indexLabel: "Research and Design" },
				{ y: 30, indexLabel: "Manufacturing" },
				{ y: 15, indexLabel: "Marketing" },
				{ y: 13, indexLabel: "Shipping" },
				{ y: 12, indexLabel: "Retail" }
			]
		}]
	});
	chart.render();
	
	}