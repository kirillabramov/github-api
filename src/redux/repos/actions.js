export const GET_REPOS = "GET_REPOS";
export const SET_REPOS = "SET_REPOS";
export const SET_STATUS = "SET_STATUS";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_HAS_MORE = "SET_HAS_MORE";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const SET_SORTING = "SET_SORTING";
export const SET_IS_INFINITE = "SET_IS_INFINITE";
export const SET_IS_MODAL_OPEN = "SET_IS_MODAL_OPEN";

export const getRepositories = () => ({
  type: GET_REPOS,
});

export const setRepositories = (repositories) => ({
  type: SET_REPOS,
  payload: { repositories },
});

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: { searchValue },
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: { status },
});

export const setHasMore = (hasMore) => ({
  type: SET_HAS_MORE,
  payload: { hasMore },
});

export const setPageNumber = (pageNumber) => ({
  type: SET_PAGE_NUMBER,
  payload: { pageNumber },
});

export const setSorting = (sorting) => ({
  type: SET_SORTING,
  payload: { sorting },
});

export const setIsInfinite = (isInfinite) => ({
  type: SET_IS_INFINITE,
  payload: { isInfinite },
});

export const setIsModalOpen = (isModalOpen) => ({
  type: SET_IS_MODAL_OPEN,
  payload: { isModalOpen },
});
