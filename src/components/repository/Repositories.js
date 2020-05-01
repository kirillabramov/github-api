import React, { forwardRef } from "react";
import Repository from ".";
import styles from "./Repository.module.scss";

const Repositories = forwardRef(({ items }, ref) => (
  <div className={styles["repositories-container"]}>
    {items.map((item, index) => {
      const itemKey = `${item.id}${index}`;
      if (items.length === index + 1) {
        return (
          <Repository item={item} key={itemKey} lastRepoElementRef={ref} />
        );
      }
      return <Repository item={item} key={itemKey} />;
    })}
  </div>
));

export default Repositories;
