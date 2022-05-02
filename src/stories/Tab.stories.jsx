import React from 'react';
import Tab from './Tab';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Tab',
    component: Tab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tab {...args} />;




export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'default',
  className : 'tab',
};

export const label1 = Template.bind({});
label1.args = {
  label: 'label1',
  className: 'label1',
};

export const Attention = Template.bind({});
Attention.args = {
  label: '必須',
  className : 'attention',
};

export const Border = Template.bind({});
Border.args = {
  label: 'border1',
  className : 'border_label',
};

export const Border2 = Template.bind({});
Border2.args = {
  label: 'border2',
  className : 'border_label_2',
};



export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Tab',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Tab',
};
