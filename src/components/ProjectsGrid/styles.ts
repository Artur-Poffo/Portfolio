import styled from "styled-components";

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: auto;
  gap: 40px 20px;

  @media (max-width: 915px) {
    grid-template-columns: 1fr;
  }
`