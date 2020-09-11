import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import useColors from "../lib/useColors";

export default () => {
  function getCurrentTime() {
    const isBrowser = typeof window !== `undefined`;
    if (isBrowser) {
      return (window.performance.now() + window.performance.timeOrigin).toFixed(
        3
      );
    } else {
      return "";
    }
  }
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  setTimeout(() => {
    setCurrentTime(getCurrentTime());
  }, 100);

  return <div> {currentTime} </div>;
};
