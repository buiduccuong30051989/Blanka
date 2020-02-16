$(function () {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jam', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [{
        label: 'Your Finance',
        // Name the series
        data: [50, 150, 80, 160, 300, 600, 200, 150, 400, 600],
        // Specify the data values array
        fill: true,
        borderColor: '#2e363a',
        // Add custom color border (Line)
        backgroundColor: '#2e363a',
        // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width

      }, {
        label: 'With Consultant',
        // Name the series
        data: [50, 150, 400, 350, 800, 1000, 1300, 1200, 1500, 1600],
        // Specify the data values array
        fill: true,
        borderColor: '#00abc9',
        // Add custom color border (Line)
        backgroundColor: '#00abc9',
        // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width

      }]
    },
    options: {
      responsive: true,
      // Instruct chart js to respond nicely.
      maintainAspectRatio: true // Add to prevent default behaviour of full-width/height

    }
  });
});