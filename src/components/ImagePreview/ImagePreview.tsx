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
  /** Intrinsic image size, used to reserve the space before the image loads */
  width: number;
  height: number;
};

const ImagePreview = (props: Props) => {
  return (
    <Zoom>
      <Image
        alt=""
        src={props.src}
        borderRadius="medium"
        width="100%"
        aspectRatio={props.width / props.height}
      />
    </Zoom>
  );
};

export default ImagePreview;
