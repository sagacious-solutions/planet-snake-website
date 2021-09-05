import Iframe from "react-iframe";
import React from "react";

import "./VideoFeed.scss";

export default function VideoFeed(props) {
  return (
    <>
      <iframe
        width="1280"
        height="720"
        src="https://youtube.com/embed/CVqWtJFbtjk"
        autoplay="1"
        mute="1"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </>
  );
}
