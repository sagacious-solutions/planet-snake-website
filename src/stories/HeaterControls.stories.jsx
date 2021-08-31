import React from "react";
import { action } from "@storybook/addon-actions";

import HeaterControl from "../components/Home/HeaterControl";

export default {
  title: "Homepage/Heater Control",
  component: HeaterControl,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <HeaterControl {...args} />;

export const Exists = Template.bind({});
Exists.args = { zone: "Basking", currentTemp: 33.5, targetTemp: 37 };

export const Clickable = Template.bind({});
Clickable.args = {
  onAdd: action("add-button-clicked"),
  onMinus: action("minus-button-clicked"),
  zone: "Warm Hide",
  currentTemp: 31.5,
  targetTemp: 32,
};
