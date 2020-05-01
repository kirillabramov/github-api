import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRepositories,
  setSearchValue,
  setIsInfinite,
} from "../../redux/repos/actions";
import Input from "../input";
import { getSearchValueSelector } from "../../redux/repos/selectors";

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(getSearchValueSelector);

  const onInputChange = ({ target: { value } }) => {
    dispatch(setSearchValue(value));
  };

  const onSearchClick = () => {
    dispatch(setIsInfinite(false));
    dispatch(getRepositories());
  };
  return (
    <div>
      <Input value={searchValue} onChange={onInputChange} />
      <button onClick={onSearchClick}>Search</button>
    </div>
  );
};

export default Search;
