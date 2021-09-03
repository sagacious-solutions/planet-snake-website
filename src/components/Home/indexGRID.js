import * as React from "react";
import React, { useEffect } from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

import HeaterControl from "./HeaterControl";
import useHardwareAPI from "../../hooks/useHardwareAPI";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";
import SunMoonSwitch from "./SunMoonSwitch";
import DisplaySensorData from "./DisplayZoneTemp";
import VideoFeed from "./VideoFeed";

const itemProps = {
  backgroundColor: "mono300",
  height: "scale1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const wideItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({ $theme }) => ({
        width: `calc((200% - ${$theme.sizing.scale800}) / 3)`,
      }),
    },
  },
};
export default function Home() {
  const {
    state,
    useState,
    updateCurrent,
    adjustBaskingTemp,
    adjustHideTemp,
    toggleDayNight,
  } = useHardwareAPI();

  return (
    <>
      <VideoFeed />
      <FlexGrid
        flexGridColumnCount={3}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
        marginBottom="scale800"
      >
        <FlexGridItem {...wideItemProps}>Wide item</FlexGridItem>
        <FlexGridItem display="none">
          This invisible one is needed so the margins line up
        </FlexGridItem>
        <FlexGridItem {...itemProps}>Item</FlexGridItem>
        <FlexGridItem {...itemProps}>Item</FlexGridItem>
        <FlexGridItem {...itemProps}>Item</FlexGridItem>
        <FlexGridItem {...itemProps}>Item</FlexGridItem>
      </FlexGrid>
    </>
  );
}
