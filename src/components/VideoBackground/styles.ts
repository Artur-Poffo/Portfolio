import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  margin-top: 7vh;
  position: relative;

  @media (max-width: 530px) {
    margin-top: 0;
  }
`

export const VideoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: .4;
  overflow: hidden;
`

export const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const HeaderText = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 22vh;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`