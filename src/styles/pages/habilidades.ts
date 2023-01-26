import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 530px) or (max-height: 850px) {
    margin-top: 10px;
  }
`