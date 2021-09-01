import React from "react";
import { action } from "@storybook/addon-actions";

import SunMoonSwitch from "../components/Home/SunMoonSwitch";

export default {
  title: "Homepage/Day Night Change",
  component: SunMoonSwitch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <SunMoonSwitch {...args} />;

export const Exists = Template.bind({});
Exists.args = {};

export const Clickable = Template.bind({});
Clickable.args = { onClick: action("sun-moon-clicked") };
