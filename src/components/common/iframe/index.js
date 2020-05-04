import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Iframe.module.scss";

const IFrame = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef && contentRef.contentWindow.document.body;

  return (
    <iframe
      {...props}
      ref={setContentRef}
      title="iframe"
      className={styles.iframe}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default IFrame;
