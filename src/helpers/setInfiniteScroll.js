import fetchStatuses from "../constants/fetchStatuses";
import {
  setPageNumber,
  getRepositories,
  setIsInfinite,
} from "../redux/repos/actions";

export default (dispatch) => ({
  node,
  status,
  observer,
  hasMore,
  pageNumber,
}) => {
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
};
