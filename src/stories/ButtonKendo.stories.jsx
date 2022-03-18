import React from 'react'
import { ButtonBox } from './ButtonKendo';

export default {
  title: 'Kendo/Button',
  component: ButtonBox
}

const Template = (args) => <ButtonBox {...args} />;

export const ButtonFont = Template.bind({});

ButtonFont.args = {
  title_btn: 'Button Group Icon',
  type: 'text'
}
