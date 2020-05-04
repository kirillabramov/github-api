import React from "react";

import styles from "../SearchPage.module.scss";
import SearchView from "./SearchView";
import SortingView from "./SortingView";

const SearchHeader = () => (
  <div className={styles["search-header"]}>
    <SearchView />
    <SortingView />
  </div>
);

export default SearchHeader;
