import styled from "styled-components";

interface IBackground {
  image: string
}

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 40px;
`

export const ImageBackground = styled.div<IBackground>`
  width: 100vw;
  height: 70vh;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 0 0 40px 40px;
  border: 3px solid var(--contrast);
  opacity: .8;
  margin-bottom: 40px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 3px;
    color: var(--primary);
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    padding: 0 10px;

    li {
      cursor: pointer;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`