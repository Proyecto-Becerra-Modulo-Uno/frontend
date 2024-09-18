function createOrUpdateChart(chartId, type, data, labels) {
    const ctx = document.getElementById(chartId).getContext('2d');
    
    if (window[chartId]) {
      window[chartId].data.labels = labels;
      window[chartId].data.datasets[0].data = data;
      window[chartId].update();
    } else {
      window[chartId] = new Chart(ctx, {
        type: type,
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }
  
  function updateCharts(data) {
    createOrUpdateChart('usersChart', 'line', [data.users], ['Usuarios']);
    createOrUpdateChart('revenueChart', 'bar', [data.revenue], ['Ingresos']);
    createOrUpdateChart('ordersChart', 'line', [data.orders], ['Órdenes']);
    
    const categoryNames = data.categories.map(cat => cat.name);
    const categoryValues = data.categories.map(cat => cat.value);
    createOrUpdateChart('categoriesChart', 'pie', categoryValues, categoryNames);
  }
  
  updateCharts(initialData);
  
  function fetchData() {
    fetch('/api/dashboard-data')
      .then(response => response.json())
      .then(data => {
        updateCharts(data);
      })
      .catch(error => console.error('Error:', error));
  }
  
  setInterval(fetchData, 5000);