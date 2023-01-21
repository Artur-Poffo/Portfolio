import styled from "styled-components";

export const Title = styled.h1`
  margin: 30px;
  font-size: 2.3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary);
  z-index: 998;

  @media (max-width: 530px) {
    text-align: center;
    margin: 40px 0;
  }
`