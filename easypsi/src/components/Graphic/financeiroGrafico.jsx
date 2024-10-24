import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const FinanceiroGrafico = () => {
  useEffect(() => {
    var chartDom = document.getElementById('grafico');
    var myChart = echarts.init(chartDom);

    // Define a opção de gráfico
    var option = {
      legend: {
        data: ['Pago', 'Não Pago']
      },
      tooltip: {},
      dataset: {
        source: [
          ['mes', 'Pago', 'Não Pago'],
          ['Janeiro', 83.1, 73.4],
          ['Fevereiro', 65.2, 86.4],
          ['Março', 72.4, 53.9],
          ['Abriel', 72.4, 53.9]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [
        { type: 'bar', name: 'Pago', color: '#4CAF50' },  // Cor verde para "Pago"
        { type: 'bar', name: 'Não Pago', color: '#FF5722' } // Cor laranja para "Não Pago"
      ]
    };

    // Aplica a opção ao gráfico
    myChart.setOption(option);

    // Cleanup para evitar problemas de múltiplos renders
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div>
      <div id="grafico" className='h-[300px] w-[500px]'></div>
    </div>
  );
};

export default FinanceiroGrafico;
