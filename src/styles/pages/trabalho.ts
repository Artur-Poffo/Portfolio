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

export const ProjectText = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  max-width: 960px;

  div {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 2.25rem;
      text-transform: capitalize;
      letter-spacing: .8px;
      margin: 30px 0;

      @media (max-width: 520px) {
        font-size: 1.75rem;
      }
    }

    p {
      letter-spacing: .5px;
      line-height: 1.6;
      font-size: 1.25rem;
      margin: 20px 0;
    }

    a {
      color: var(--primary);
      text-decoration: underline;
    }

    code {
      color: var(--secondary);
      width: max-content;
      padding: 7px;
      display: inline;
      font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
      border-radius: 5px;
      background-color: var(--contrast);
    }

    pre {
      align-self: center;
      display: block;
      width: 100%;
      background-color: var(--contrast);
      border-radius: 5px;
      margin: 20px 0;

      code {
        display: block;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        tab-size: 2;
        hyphens: none;
      }

    }

    iframe {
      width: 100%;

      @media (max-width: 520px) {
        height: 220px;
      }
    }
  }
`