$(document).ready(function () {
  "use strict";

  var ctx = document.getElementById("myChart");
  var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["27 May", "28 May", "29 May", "02 Jun", "04 Jun", "08 Jun", "12 Jun"],
      datasets: [{
        label: 'Financial Traffic',
        data: [15, 28, 40, 50, 65, 77, 100],
        backgroundColor: ['rgba(31, 92, 169, 0.2)', 'rgba(31, 92, 169, 0.2)', 'rgba(31, 92, 169, 0.2)', 'rgba(31, 92, 169, 0.2)', 'rgba(31, 92, 169, 0.2)', 'rgba(31, 92, 169, 0.2)', 'rgba(31, 92, 169, 0.2)'],
        borderColor: ['rgba(31,92,169,1)', 'rgba(31,92,169,1)', 'rgba(31,92,169,1)', 'rgba(31,92,169,1)', 'rgba(31,92,169,1)', 'rgba(31,92,169,1)', 'rgba(31,92,169,1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
});