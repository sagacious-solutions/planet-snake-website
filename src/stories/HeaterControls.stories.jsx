import React from 'react';

import  HeaterControl from '../components/Home/HeaterControl';

export default {
  title: 'Homepage/Heater Control',
  component: HeaterControl,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <HeaterControl {...args} />;

export const Exists = Template.bind({});
Exists.args = {

};
