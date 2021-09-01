import React from "react";
import { action } from "@storybook/addon-actions";

import DisplayZoneTemp from "../components/Home/DisplayZoneTemp";

export default {
  title: "Homepage/Display Tempture for Zone",
  component: DisplayZoneTemp,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <DisplayZoneTemp {...args} />;

export const Exists = Template.bind({});
Exists.args = { zone: "Cool Side : ", temperature: 18.55 };
