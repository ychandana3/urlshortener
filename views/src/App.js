import { createBrowserRouter, NavLink } from "react-router-dom";
import { useState } from "react";
import ShortUrl from "./ShortUrl";
import styled from "styled-components";
import MainContainer, { StyledContainer } from "./Styled-components/Containers";
import DefaultButton from "./Styled-components/Buttons";
import StyledInput from "./Styled-components/Input";

export function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    //sending request to backend to fetch short url generated
    try {
      const response = await fetch("http://localhost:5000/generate-short-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ urlFromClient: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Response:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <MainContainer>
      <StyledContainer>
        <StyledInput placeholder="Enter URL" onChange={handleInputChange} />
        <NavLink to="/generate-short-url">
          <DefaultButton onClick={handleSubmit}>Shorten URL</DefaultButton>
        </NavLink>
      </StyledContainer>
    </MainContainer>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/generate-short-url",
    element: <ShortUrl />,
  },
  {
    path: "/update-short-url",
    element: <ShortUrl />,
  },
]);
