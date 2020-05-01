import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRepositories,
  setSearchValue,
  setIsInfinite,
} from "../../redux/repos/actions";
import { getSearchValueSelector } from "../../redux/repos/selectors";
import keyCodes from "../../constants/keyCodes";

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(getSearchValueSelector);

  const handleSearch = () => {
    dispatch(setIsInfinite(false));
    dispatch(getRepositories());
  };

  const onKeyDown = ({ keyCode }) => {
    if (keyCode === keyCodes.ENTER) {
      handleSearch();
    }
    if (keyCode === keyCodes.ESC) {
      dispatch(setSearchValue(""));
    }
  };

  const onInputChange = ({ target: { value } }) => {
    dispatch(setSearchValue(value));
  };

  return (
    <div>
      <input
        type="text"
        onChange={onInputChange}
        value={searchValue}
        onKeyDown={onKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
