import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 500px;
  letter-spacing: 1.5px;

  h1 {
    align-self: flex-start;
    font-weight: 300;
  }
`