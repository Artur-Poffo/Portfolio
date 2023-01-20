import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 7vh;

  background-color: var(--background);
  box-shadow: 0px 0px 20px var(--contrast);

  position: fixed;
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
`