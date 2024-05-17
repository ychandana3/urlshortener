
import { createBrowserRouter, NavLink } from "react-router-dom";
import ShortUrl from "./ShortUrl";
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  
  height: 100vh;
  background-color: #f0f0f0;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  height: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  width: 500px;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export function App() {
  return (
    <AppContainer>
      <FormContainer>
        <StyledInput placeholder="Enter URL" />
        <StyledButton>Shorten URL</StyledButton>
      </FormContainer>
    </AppContainer>
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
