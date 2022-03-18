import React from 'react';

import { ChartData } from './Chart';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kendo/Chart',
  component: ChartData,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ChartData {...args} />;

export const ChartEl = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const data = [{product: 'Egg', sales: 100}, {product: "flour", sales: 200}, {product: 'Milk', sales: 300}];
ChartEl.args = {
  data: data,
  title: 'My Sales Product'
};
