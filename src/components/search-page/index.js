import React from "react";
import { useSelector } from "react-redux";
import { getReposSelector } from "../../redux/repos/selectors";
import AsyncArea from "../common/async-area";
import SearchHeader from "./search-header";
import SearchBody from "./search-body";

const SearchPage = () => {
  const { status } = useSelector(getReposSelector);

  return (
    <AsyncArea status={status}>
      <SearchHeader />
      <SearchBody />
    </AsyncArea>
  );
};

export default SearchPage;
