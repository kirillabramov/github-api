import React, { useRef, useCallback, useState } from "react";
import RepositoryList from "./RepositoryList";
import { useSelector, useDispatch } from "react-redux";
import { getReposSelector } from "../../../redux/repos/selectors";
import { setIsModalOpen } from "../../../redux/repos/actions";
import RepositoryDetails from "./RepositoryDetails";
import setInfiniteScroll from "../../../helpers/setInfiniteScroll";

const SearchBody = () => {
  const [activeItem, setActiveItem] = useState(null);
  const dispatch = useDispatch();
  const {
    repositories,
    status,
    hasMore,
    pageNumber,
    isModalOpen,
  } = useSelector(getReposSelector);

  const handleRepoClick = (item) => {
    setActiveItem(item);
    dispatch(setIsModalOpen(true));
  };
  const closeModal = () => {
    dispatch(setIsModalOpen(false));
  };

  const observer = useRef();
  const dispatchedInfiniteScroll = setInfiniteScroll(dispatch);

  const lastRepoElementRef = useCallback(
    (node) => {
      dispatchedInfiniteScroll({ node, status, observer, hasMore, pageNumber });
    },
    [dispatchedInfiniteScroll, hasMore, pageNumber, status]
  );

  return (
    <>
      <RepositoryList
        items={repositories}
        ref={lastRepoElementRef}
        onRepoClick={handleRepoClick}
      />
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
