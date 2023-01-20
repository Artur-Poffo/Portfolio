import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const Info = styled.div`
  max-width: 560px;
  opacity: .8;
  transition: all .4s ease;

  h1 {
    color: var(--primary);
    letter-spacing: 2px;
  }

  p {
    letter-spacing: .5px;
    line-height: 1.6;
    font-size: 1.1rem;
  }

  &:hover {
    opacity: 1;
  }
`

export const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  code {
    padding: 10px 20px;
    color: var(--primary);
    background-color: var(--contrast);
    border-radius: 2px;
  }
`