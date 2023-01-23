import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 40px 20px;
  padding: 30px 0;

  @media (max-width: 915px) {
    grid-template-columns: 1fr;
  }
`