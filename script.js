document.addEventListener('DOMContentLoaded', function () {
    new Chart('money', {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'การใช้เงิน',
                data: [150, 180, 250, 280, 350],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: { scales: { y: { beginAtZero: true } } }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sleepData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], 
        datasets: [{
            data: [7, 6.5, 7.2, 6.8, 7.5],
            backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)', 'rgba(75,192,192,0.2)', 'rgba(153,102,255,0.2)'],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)', 'rgba(75,192,192,1)', 'rgba(153,102,255,1)'],
            borderWidth: 1
        }]
    };

    new Chart('sleep', {
        type: 'pie',
        data: sleepData,
        options: {
            title: { display: true, text: 'นอนวันจันทร์ถึงศุกร์' }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    new Chart('oil', {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'oil (liters)',
          data: [2, 1.5, 2.2, 1.8, 2.5],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true
        }]
      },
      options: {
        scales: { y: { beginAtZero: true, stepSize: 0.5 } },
        title: { display: true, text: 'oil Mon-Fri' }
      }
    });
  });
  