import React, { useRef, useCallback } from "react";
import Search from "../search";
import Repositories from "../repository/Repositories";
import { useSelector, useDispatch } from "react-redux";
import { getReposSelector } from "../../redux/repos/selectors";
import fetchStatuses from "../../constants/fetchStatuses";
import {
  setPageNumber,
  getRepositories,
  setIsInfinite,
} from "../../redux/repos/actions";
import Sorting from "../sorting";

import styles from "./SearchPage.module.scss";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { repositories, status, hasMore, pageNumber } = useSelector(
    getReposSelector
  );

  const observer = useRef();
  const lastRepoElementRef = useCallback(
    (node) => {
      if (status === fetchStatuses.IN_PROGRESS) return;
      if (observer && observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(setPageNumber(pageNumber + 1));
          dispatch(setIsInfinite(true));
          dispatch(getRepositories());
        }
      });

      if (node) observer.current.observe(node);
    },
    [status, hasMore, pageNumber, dispatch]
  );

  return (
    <div>
      <div className={styles["search-header"]}>
        <Search />
        <Sorting />
      </div>
      <Repositories items={repositories} ref={lastRepoElementRef} />
      {status === fetchStatuses.IN_PROGRESS && <div>Loading...</div>}
      {status === fetchStatuses.FAILED && <div>Error</div>}
    </div>
  );
};

export default SearchPage;
