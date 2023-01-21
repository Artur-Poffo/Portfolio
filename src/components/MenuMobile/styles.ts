import styled from "styled-components";

interface Props {
  IsOpen: boolean
}

export const Hamburguer = styled.div`
  display: none;

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 45px;
    height: 45px;
    background-color: var(--contrast);
    border-radius: 5px;
    box-shadow: 0px 0px 10px #000;
    position: absolute;
    top: 30px;
    right: 40px;
    cursor: pointer;
    z-index: 999;

    div {
      width: 70%;
      height: 3px;
      background-color: #fff;
    }
  }
`

export const ListMobile = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  transition: all .4s ease;
  opacity: ${props => props.IsOpen ? 1 : 0};
  margin-left: ${props => props.IsOpen ? 0 : "-100%"};
  z-index: 998;

  h1 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    li {
      letter-spacing: 2px;
      font-weight: bolder;
      cursor: pointer;
    }
  }
`