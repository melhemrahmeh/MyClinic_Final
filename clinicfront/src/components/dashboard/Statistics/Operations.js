import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';
import 'hammerjs';
const [firstSeries, secondSeries] = [[1, 2, 3, 5], [-1, -2, -3, -5]];

export default function Operations() { 
    return (
    <Chart>
    <ChartSeries>
        <ChartSeriesItem type="column" data={firstSeries} />
        <ChartSeriesItem type="column" data={secondSeries} />
    </ChartSeries>
</Chart>);
}
