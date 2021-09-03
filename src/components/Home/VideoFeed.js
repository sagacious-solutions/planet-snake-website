import Iframe from "react-iframe";
import React from "react";

import "./VideoFeed.scss";

export default function VideoFeed(props) {
  return (
    <>
      <Iframe
        width="1280"
        height="720"
        loading="lazy"
        scrolling="no"
        className="vivarium-video"
        url="http://planetsnake.duckdns.org:8567/"
        frameBorder="0"
      />
    </>
  );
}
