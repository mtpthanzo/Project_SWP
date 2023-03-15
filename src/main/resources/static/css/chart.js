var ctx = document.getElementById('myChart').getContext('2d');
var revenue = document.getElementById('myChart1').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Youtube', 'Amazon', 'Apple'],
        datasets: [{
            label: 'Order',

            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});

var myChart = new Chart(revenue, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'Aprill', 'May', 'June','July','August',
            'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Revenue',
            data: [12, 19, 3, 5, 2, 3,12,3,2,7,14,9],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});
