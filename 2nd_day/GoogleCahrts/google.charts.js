// JavaScript File

// Load the Visualization API and the piechart package.
 google.load('visualization', '1.0', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.setOnLoadCallback(drawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {

 // Create the data table.
 var data = new google.visualization.DataTable();
 data.addColumn('string', 'Topping');
 data.addColumn('number', 'Slices');
 data.addRows([
   ['所得税', 134900],
   ['法人税', 77920],
     ['消費税', 101990],
     ['その他 揮発油税,酒税等', 94460],
     ['その他収入', 94905],
     ['公債', 442980]
 ]);

 // Set chart options
 var options = {'title':'平成23年度当初予算（歳入内訳）',
                'width':800,
                'height':800};

 // Instantiate and draw our chart, passing in some options.
 var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
 chart.draw(data, options);
}