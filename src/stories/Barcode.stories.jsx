import React from 'react';

import { BarcodeData } from './Barcode';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kendo/Barcode',
  component: BarcodeData,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BarcodeData {...args} />;

export const BarcodeEl = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BarcodeEl.args = {
  type: 'EAN13',
  label: '123819287302'
};
