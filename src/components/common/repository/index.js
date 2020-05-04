import React from "react";
import styles from "./Repository.module.scss";

const Repository = ({ item, lastRepoElementRef, onClick }) => {
  const { description, forks_count, stargazers_count, name } = item || {};

  const handleClick = () => {
    onClick(item);
  };

  return (
    <div
      className={styles["repo-container"]}
      ref={lastRepoElementRef}
      onClick={handleClick}
    >
      <div>Name of repo: {name}</div>
      <div>Description: {description}</div>
      <div>Forks: {forks_count}</div>
      <div>Stars: {stargazers_count}</div>
    </div>
  );
};

export default Repository;
