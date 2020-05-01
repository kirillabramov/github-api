import {
  SET_REPOS,
  SET_STATUS,
  SET_SEARCH_VALUE,
  SET_PAGE_NUMBER,
  SET_HAS_MORE,
  SET_SORTING,
  SET_IS_INFINITE,
  SET_IS_MODAL_OPEN,
} from "./actions";

const defaultState = {
  status: "",
  repositories: [],
  searchValue: "",
  hasMore: false,
  pageNumber: 1,
  sorting: "",
  isInfinite: false,
  isModalOpen: false,
};

export const reposReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_REPOS: {
      const { repositories } = action.payload;
      const stateRepo = state.isInfinite
        ? state.repositories.concat(repositories)
        : repositories;
      return {
        ...state,
        repositories: stateRepo,
      };
    }
    case SET_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        status,
      };
    }
    case SET_SEARCH_VALUE: {
      const { searchValue } = action.payload;
      return {
        ...state,
        searchValue,
      };
    }
    case SET_PAGE_NUMBER: {
      const { pageNumber } = action.payload;
      return {
        ...state,
        pageNumber,
      };
    }
    case SET_HAS_MORE: {
      const { hasMore } = action.payload;
      return {
        ...state,
        hasMore,
      };
    }
    case SET_SORTING: {
      const { sorting } = action.payload;
      return {
        ...state,
        sorting,
      };
    }
    case SET_IS_INFINITE: {
      const { isInfinite } = action.payload;
      return {
        ...state,
        isInfinite,
      };
    }
    case SET_IS_MODAL_OPEN: {
      const { isModalOpen } = action.payload;
      return {
        ...state,
        isModalOpen,
      };
    }

    default:
      return state;
  }
};
