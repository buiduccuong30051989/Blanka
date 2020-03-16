$(document).ready(function () {
  "use strict";

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['OK', 'WARNING', 'CRITICAL'],
      datasets: [{
        label: '# of Tomatoes',
        data: [12, 19, 8],
        backgroundColor: ['#3fa037', '#5472d2', '#f44336']
      }]
    },
    options: {
      responsive: false,
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          padding: 30
        }
      }
    }
  });
});