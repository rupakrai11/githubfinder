import React, { Fragment, useContext, useEffect } from "react";
import Spinner from "./../layout/Sppiner";
import { Link } from "react-router-dom";
import Repos from "./../Repos/Repos";
import GithubContext from "./../../contaxt/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { loading, user, getUser, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fa fa-check text-success" />
      ) : (
        <i className="fa fa-times text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="person"
            className="round-image"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location:{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
              <a href={html_url} className="btn btn-dark my-1">
                Visit Github Profile
              </a>
            </Fragment>
          )}
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Login:</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className=" card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-success">Follwing:{following}</div>
        <div className="badge badge-light">Public Repo:{public_repos}</div>
        <div className="badge badge-dark">Public Gists:{public_gists}</div>
      </div>
      <Repos />
    </Fragment>
  );
};

export default User;
