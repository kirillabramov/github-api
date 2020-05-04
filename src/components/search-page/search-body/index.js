import React, { useState } from "react";
import RepositoryList from "./RepositoryList";
import { useSelector, useDispatch } from "react-redux";
import { getReposSelector } from "../../../redux/repos/selectors";
import { setIsModalOpen } from "../../../redux/repos/actions";
import RepositoryDetails from "./RepositoryDetails";

const SearchBody = () => {
  const [activeItem, setActiveItem] = useState(null);
  const dispatch = useDispatch();
  const { repositories, isModalOpen } = useSelector(getReposSelector);

  const handleRepoClick = (item) => {
    setActiveItem(item);
    dispatch(setIsModalOpen(true));
  };
  const closeModal = () => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <>
      <RepositoryList items={repositories} onRepoClick={handleRepoClick} />
      {isModalOpen && (
        <RepositoryDetails
          url={activeItem && activeItem.clone_url}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default SearchBody;
