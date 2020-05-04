import React, { forwardRef } from "react";
import Repository from "../../common/repository";
import styles from "./SearchBody.module.scss";

const RepositoryList = forwardRef(({ items, onRepoClick }, ref) => (
  <div className={styles["repositories-container"]}>
    {items.map((item, index) => {
      const itemKey = `${item.id}${index}`;
      const itemRef = items.length === index + 1 ? ref : null;
      return (
        <Repository
          item={item}
          key={itemKey}
          onClick={onRepoClick}
          lastRepoElementRef={itemRef}
        />
      );
    })}
  </div>
));

export default RepositoryList;
