import Iframe from "react-iframe";
import React from "react";

import "./VideoFeed.scss";

export default function VideoFeed(props) {
  return (
    <>
      <Iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/live_stream?channel=UCEB9BLgitLagZxh2de9CT5A"
        autoplay="1"
        mute="1"
        frameborder="0"
        allowfullscreen
      ></Iframe>
    </>
  );
}
