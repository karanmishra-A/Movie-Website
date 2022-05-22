/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import Result from "../MovieResults/Result";
import Container from "../Global/Container";

const MovieResults = ({ results, openPopup }) => {
  return (
    <div className="movies" css={styles}>
      <Container>
        {results.results.map((result) => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  position: relative;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default MovieResults;
