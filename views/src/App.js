
import { createBrowserRouter, NavLink } from "react-router-dom";
import ShortUrl from "./ShortUrl";
import styled from 'styled-components';
import MainContainer,{StyledContainer} from "./Styled-components/Containers";
import DefaultButton from "./Styled-components/Buttons";
import StyledInput from "./Styled-components/Input";



export function App() {
  return (
    <MainContainer>
      <StyledContainer>
        <StyledInput placeholder="Enter URL" />
        <DefaultButton>Shorten URL</DefaultButton>
      </StyledContainer>
    </MainContainer>
  );
}


export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/generate-short-url',
    element:<ShortUrl/>
  },
  {
    path:'/update-short-url',
    element:<ShortUrl/>
  },

])
