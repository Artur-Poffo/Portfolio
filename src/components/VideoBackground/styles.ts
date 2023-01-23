import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 43vh;
  position: relative;
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
  margin-top: 20vh;

  h1 {
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`