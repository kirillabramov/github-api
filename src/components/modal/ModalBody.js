import React, { useEffect, useCallback } from "react";
import IFrame from "../modal/IFrame";
import styles from "./Modal.module.scss";
import keyCodes from "../../constants/keyCodes";

const ModalBody = ({ url, closeModal }) => {
  const onKeyDown = useCallback(
    ({ keyCode }) => {
      if (keyCode === keyCodes.ESC) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div className={styles["modal-body"]}>
      <IFrame>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Github Repo
        </a>
      </IFrame>
      <button onClick={closeModal} className={styles["modal-close"]}>
        X
      </button>
    </div>
  );
};

export default ModalBody;
