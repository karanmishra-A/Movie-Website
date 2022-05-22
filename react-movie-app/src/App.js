/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import axios from "axios";

import Input from "./components/Input/Input";
import MovieResults from "./components/MovieResults/MovieResults";
import Popup from "./components/Popup/Popup";

const App = () => {
  // Form input state
  const [inputValue, setInputValue] = useState("");
  const [formResults, setFormResults] = useState({ results: [], selected: {} });

  const api = "http://www.omdbapi.com/?apikey=192ca557";

  // Get the input value from user and update state
  const handleInputValue = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
  };

  // Connect to api and get data
  const handleFormResults = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      await axios(api + "&s=" + inputValue).then(({data}) => {
        let results = data.Search
        // check if user enters an empty string
        setFormResults((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
    setInputValue("")
  };

  // Open popup
  const openPopup = (id) => {
    axios(api + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(data);
      setFormResults((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  // Close popup
  const closePopup = () => {
    setFormResults((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="app" css={styles}>
      <h1>React Movie Library</h1>
      <Input
        value={inputValue}
        handleInputValue={handleInputValue}
        handleFormResults={handleFormResults}
      />
      <MovieResults results={formResults} openPopup={openPopup} />
      {typeof formResults.selected.Title !== "undefined" ? (
        <Popup selected={formResults.selected} closePopup={closePopup} />
      ) : (
        false
      )}
    </div>
  );
};

const styles = css`
  background: blueviolet;
  min-height: 100vh;
  h1 {
    text-align: center;
    font-size: 40px;
    padding: 10px 0;
  }
`;

export default App;
