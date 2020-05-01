import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.element = document.createElement("div");
  }

  componentDidMount() {
    document.body.appendChild(this.element);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
    document.body.style.overflow = "auto";
  }
  render() {
    return createPortal(
      <div className={styles["modal-overlay"]}>{this.props.children}</div>,
      this.element
    );
  }
}
export default Modal;
