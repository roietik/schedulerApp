import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, BarSeries, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@material-ui/core/styles';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { monthlySummary } from 'helpers/helpers';

const Bar = styled(BarSeries)({
  fill: '#8ACE76',
});

class ExpensesPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.setState({ data: monthlySummary() });
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />
          <Bar valueField="summary" argumentField="month" />
          <EventTracker />
          <HoverState />
        </Chart>
      </Paper>
    );
  }
}

export default ExpensesPage;
