// Data array
var xArray = ["Indonesia", "France", "Canada", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];

// Define Layout
var layout = {title:"World Wide Wine Production"};

// Define Data
var data = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);