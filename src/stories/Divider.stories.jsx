import React from 'react';

import { Divider } from './Divider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Exercise/Divider',
  component: Divider,
};

const Template = (args) => <Divider {...args} />;

export const Image = Template.bind({});
Image.args = {
  type: 'dotted',
  weight: 'heavy',
  icon_style: 'bi-alarm'
};

export const Label = Template.bind({});
Label.args = {
  type: 'solid',
  weight: 'reguler',
  label: 'Label'
};
