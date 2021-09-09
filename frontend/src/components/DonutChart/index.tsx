import Chart from 'react-apexcharts'

function DonutChart() {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{...options, labels: mockData.labels}}  //labels da mockdata
            series={mockData.series}    //series da mockdata
            type="donut"  //tipo de grafico Barras
            height="240"       
        />
    );
  }
  
  export default DonutChart;