import React from "react";
import Select from "react-select";
import styles from "../SearchPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getRepositories,
  setSorting,
  setIsInfinite,
} from "../../../redux/repos/actions";
import options from "../../../constants/sortingOptions";

const SortingView = () => {
  const dispatch = useDispatch();
  const { sorting } = useSelector(getRepositories);

  const handleChange = ({ value }) => {
    dispatch(setSorting(value));
    dispatch(setIsInfinite(false));
    dispatch(getRepositories());
  };
  return (
    <div className={styles["sort-container"]}>
      <Select value={sorting} onChange={handleChange} options={options} />
    </div>
  );
};

export default SortingView;
