import React, { useEffect, useCallback } from "react";
import IFrame from "../../common/iframe";
import styles from "./SearchBody.module.scss";
import keyCodes from "../../../constants/keyCodes";
import Modal from "../../common/modal";

const RepositoryDetails = ({ url, closeModal }) => {
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
    <Modal>
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
    </Modal>
  );
};

export default RepositoryDetails;
