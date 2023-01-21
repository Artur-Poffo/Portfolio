import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  min-height: 180px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: var(--contrast);
  transition: all .5s ease;

  h2 {
    margin-bottom: 5px;
  }

  &:hover {
    transform: scale(1.01) translateY(-10px);
    box-shadow: 0px 0px 10px var(--primary);
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`

export const Grid = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 30px;

  @media (max-width: 1342px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1007px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 680px) {
    padding: 20px;
    grid-template-columns: 1fr;
  }
`