import React from "react";
import styles from "./Repository.module.scss";

const Repository = ({ item, lastRepoElementRef }) => {
  const { description, forks_count, stargazers_count, name } = item;
  return (
    <div className={styles["repo-container"]} ref={lastRepoElementRef}>
      <div>Name of repo: {name}</div>
      <div>Description: {description}</div>
      <div>Forks: {forks_count}</div>
      <div>Stars: {stargazers_count}</div>
    </div>
  );
};

export default Repository;
