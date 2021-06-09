import React, { useContext } from "react";
import RepoItem from "./ReposItem";
import GithubContext from "./../../contaxt/github/githubContext";

/**
 * @author
 * @function Repos
 **/

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
