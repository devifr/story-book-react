import React from 'react';
import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';
import '@progress/kendo-theme-default/dist/all.css';

export const ChartData = ({ data, label, ...props }) => {
  return (
    <Chart>
       <ChartSeries>
       <ChartSeriesItem data={data} type="column" field="sales" categoryField="product" />
       </ChartSeries>
     </Chart>
  );
};
