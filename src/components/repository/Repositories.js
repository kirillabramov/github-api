import React, { forwardRef } from "react";
import Repository from ".";
import styles from "./Repository.module.scss";

const Repositories = forwardRef(({ items, onRepoClick }, ref) => (
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

export default Repositories;
