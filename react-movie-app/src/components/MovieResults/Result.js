/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const Result = ({ result, openPopup }) => {
  return (
    <div
      className="movieResults"
      css={styles}
      onClick={() => openPopup(result.imdbID)}
    >
      <img src={result.Poster} />
      <div className="movieInfo">
        <h3>
          <strong>Title:</strong> {result.Title}
        </h3>
        <span>
          <strong>Year:</strong> {result.Year}
        </span>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 320px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 6px -6px black;
  margin: 0 0 20px 0;
  position: relative;
  cursor: pointer;
  .movieInfo {
    padding: 20px 10px;
    h3 {
    }
  }
`;

export default Result;

// Poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
// Title: "Batman Begins"
// Type: "movie"
// Year: "2005"
// imdbID: "tt0372784"
