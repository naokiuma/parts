import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;



export const Nextbtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Nextbtn.args = {
  primary: true,
  label: '',
  className : 'next_btn',
};

export const Borderbtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Borderbtn.args = {
  primary: true,
  label: 'border',
  className : 'border_btn',
};

export const Borderbtn2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Borderbtn2.args = {
  primary: true,
  label: 'border',
  className : 'border_btn_2',
};


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
