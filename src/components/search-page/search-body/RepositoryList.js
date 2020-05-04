import React, { useRef, useCallback } from "react";
import Repository from "../../common/repository";
import styles from "./SearchBody.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getReposSelector } from "../../../redux/repos/selectors";
import setInfiniteScroll from "../../../helpers/setInfiniteScroll";

const RepositoryList = ({ items, onRepoClick }) => {
  const dispatch = useDispatch();
  const { status, hasMore, pageNumber } = useSelector(getReposSelector);

  const observer = useRef();
  const dispatchedInfiniteScroll = setInfiniteScroll(dispatch);

  const lastRepoElementRef = useCallback(
    (node) => {
      dispatchedInfiniteScroll({ node, status, observer, hasMore, pageNumber });
    },
    [dispatchedInfiniteScroll, hasMore, pageNumber, status]
  );

  return (
    <div className={styles["repositories-container"]}>
      {items.map((item, index) => {
        const itemKey = `${item.id}${index}`;
        const itemRef = items.length === index + 1 ? lastRepoElementRef : null;
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
  );
};

export default RepositoryList;
