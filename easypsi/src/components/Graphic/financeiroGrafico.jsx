import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const FinanceiroGrafico = () => {
  useEffect(() => {
    var chartDom = document.getElementById('grafico');
    var myChart = echarts.init(chartDom);

    // Define a opção de gráfico
    var option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            120,
            {
              value: 200,
              itemStyle: {
                color: '#a90000'
              }
            },
            150,
            80,
            70,
            110,
            130
          ],
          type: 'bar'
        }
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
      <div id="grafico" className='h-[350px] w-[500px]'></div>
    </div>
  );
};

export default FinanceiroGrafico;
