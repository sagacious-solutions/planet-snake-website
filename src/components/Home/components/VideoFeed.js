import Iframe from "react-iframe";
import React from "react";

import "./VideoFeed.scss";

export default function VideoFeed(props) {
  return (
    <>
      <div className="iframe-yt">
        <Iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/live_stream?channel=UCEB9BLgitLagZxh2de9CT5A"
          autoplay="1"
          mute="1"
          frameborder="0"
          allowfullscreen
          display="flex"
          justify-content="center"
        ></Iframe>
      </div>
    </>
  );
}
