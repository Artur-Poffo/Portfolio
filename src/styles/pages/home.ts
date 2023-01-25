import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 30px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Info = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  letter-spacing: 1.8px;
  max-width: 500px;

  h1 {
    color: var(--primary);
    font-size: 2.5rem;
  }

  p {
    margin-bottom: 10px;
  }
`