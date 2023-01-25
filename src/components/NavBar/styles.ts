import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  padding: 20px 0;

  background-color: var(--background);
  box-shadow: 0px 0px 20px var(--contrast);

  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-weight: 500;
    letter-spacing: 2px;
    opacity: .7;
    transition: .4s ease;

    &:hover {
      opacity: 1;
    }
  }

  ul {
    display: flex;
    gap: 10px;

    li {
      font-weight: 400;
      letter-spacing: 1.2px;
      opacity: .7;
      cursor: pointer;
      transition: .5s ease;

      &:hover {
        opacity: 1;
        color: var(--secondary);
      }
    }
  }

  z-index: 999;

  @media (max-width: 530px) or (max-height: 850px) {
    display: none;
  }
`