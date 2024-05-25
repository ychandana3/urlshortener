import { createBrowserRouter, NavLink } from "react-router-dom";
import { useContext, useState, lazy, Suspense } from "react";
import styled from "styled-components";
import MainContainer, { StyledContainer } from "./Styled-components/Containers";
import DefaultButton from "./Styled-components/Buttons";
import StyledInput from "./Styled-components/Input";
import { AppContext } from "./AppProvider";

const ShortUrl = lazy(() => import("./ShortUrl"));
export function App() {
  const [inputValue, setInputValue] = useState("");
  const context = useContext(AppContext);

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
      //To set shortUrl of context
      context.setShortUrl(responseData.data.shortLink);
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
    element: (
      <Suspense>
        <ShortUrl />
      </Suspense>
    ),
  },
  {
    path: "/update-short-url",
    element: <ShortUrl />,
  },
]);
