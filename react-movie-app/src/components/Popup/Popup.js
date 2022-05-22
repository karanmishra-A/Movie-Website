/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Container from "../Global/Container";

const Popup = ({ selected, closePopup }) => {
  return (
    <section className="popup" css={styles}>
      <Container>
        <div className="content">
          <img src={selected.Poster} alt="" />
          <div className="wrap">
            <h2>
              <strong>Title:</strong> {selected.Title}
            </h2>
            <span>
              <strong>Year:</strong> {selected.Year}
            </span>
            <p className="rating">
              <strong>Rating:</strong> {selected.imdbRating}
            </p>
            <div className="plot">
              <p>
                <strong>Plot:</strong> {selected.Plot}
              </p>
            </div>
            <button className="close" onClick={closePopup}>
              Back
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    color: #fff;
    line-height: 2.4rem;
    .wrap {
      padding: 0 20px;
      .plot {
        p {
          line-height: 1.4rem;
        }
      }
      button {
        background: yellowgreen;
        padding: 6px 40px;
        border-radius: 4px;
        font-weight: bold;
        outline: none;
        margin: 18px 0 0 0;
      }
    }
  }
`;

export default Popup;
