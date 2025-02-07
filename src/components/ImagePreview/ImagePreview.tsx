"use client";

import React from "react";
import { Image } from "reshaped";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./ImagePreview.css";

type Props = {
  src: string;
};

const ImagePreview = (props: Props) => {
  return (
    <Zoom>
      <Image alt="" src={props.src} borderRadius="medium" />
    </Zoom>
  );
};

export default ImagePreview;
