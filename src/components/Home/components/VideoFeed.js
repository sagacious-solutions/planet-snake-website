import Iframe from "react-iframe";
import React from "react";

import "./VideoFeed.scss";

export default function VideoFeed(props) {
  return (
    <>
      <iframe
        width="1920"
        height="1280"
        src="https://youtube.com/embed/CVqWtJFbtjk"
        autoplay="1"
        mute="1"
        frameborder="0"
        allowfullscreen
      ></iframe>
      {/* <iframe
        src="http://50.68.181.84:8411/player.html"
        name="restreamer-player"
        width="1280"
        height="720"
        scrolling="no"
        frameborder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowfullscreen="true"
      ></iframe> */}

      {/* <Iframe
        width="1280"
        height="720"
        loading="lazy"
        scrolling="no"
        className="vivarium-video"
        url="http://192.168.1.243:8081/"
        frameBorder="0"
      /> */}
    </>
  );
}
