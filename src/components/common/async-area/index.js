import React from "react";
import fetchStatuses from "../../../constants/fetchStatuses";

const AsyncArea = ({ children, status }) => {
  const isFetching = status === fetchStatuses.IN_PROGRESS;
  const isFailed = status === fetchStatuses.FAILED;

  return (
    <>
      {children}
      {isFetching && <div>Loading...</div>}
      {isFailed && <div>Error</div>}
    </>
  );
};

export default AsyncArea;
