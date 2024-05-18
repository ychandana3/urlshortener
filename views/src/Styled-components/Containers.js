import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const StyledContainer = styled(MainContainer)`
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  height: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default MainContainer;