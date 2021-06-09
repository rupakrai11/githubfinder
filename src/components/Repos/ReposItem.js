import React from "react";
import PropTypes from "prop-types";

/**
 * @author
 * @function RepoItem
 **/

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};
RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
