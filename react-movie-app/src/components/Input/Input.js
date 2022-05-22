/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from "react";
import Container from "../Global/Container";

const Input = ({ handleInputValue, handleFormResults }) => {
  return (
    <div className="movieForm" css={styles}>
      <Container>
        <form onSubmit={handleFormResults}>
          <input
            type="text"
            onChange={handleInputValue}
          />
          <button onClick={handleFormResults}>Search Movie</button>
        </form>
      </Container>
    </div>
  );
};


const styles = css`
  width: 100%;
  padding: 20px 0;
  .container {
    form {
      width: 100%;
      display: flex;
      justify-content: center;
      input {
        width: 500px;
        height: 40px;
        border-radius: 4px 0 0 4px;
        outline: none;
        padding-left: 10px;
        &:focus {
          background: #F8F8F8;
        }
      }
      button {
        background: #fff;
        border-radius: 0 4px 4px 0;
        padding: 0 10px;
        transition: .4s ease-in-out;
        font-weight: 600;
        outline: none;
        &:hover {
          background: greenyellow;
        }
      }
    }
  }
`

export default Input;
