import styled from "styled-components";

export const Title = styled.h1`
  position: absolute;
  top: 100px;
  left: 50px;
  font-size: 2.3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary);

  @media (max-width: 530px) {
    position: static;
    text-align: center;
    margin: 40px 0;
  }
`