import Iframe from "react-iframe";
import React from "react";

import "./VideoFeed.scss";

export default function VideoFeed(props) {
  return (
    <>
      <Iframe
        width="640"
        height="360"
        src="https://youtube.com/embed/CVqWtJFbtjk"
        autoplay="1"
        mute="1"
        frameborder="0"
        allowfullscreen
      ></Iframe>
    </>
  );
}
