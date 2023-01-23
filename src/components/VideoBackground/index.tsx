import { Container, VideoContainer, Video, HeaderText } from "./styles"

const isProd = process.env.IsProd
const baseAssetUrl = isProd ? 'https://mywebexperience.vercel.app' : ''

interface Props {
  Title?: string
}

const VideoBackground: React.FC<Props> = ({ Title }) => {
  return (
    <>
      <Container>
        <VideoContainer>
          <Video autoPlay muted loop >
            <source
              src={baseAssetUrl + '/ProjectsHeader.webm'}
              type="video/webm; codecs=vp9"
            />
            <source
              src={baseAssetUrl + '/ProjectsHeader.m4v'}
              type="video/mp4; codecs=hvc1"
            />
          </Video>
        </VideoContainer>

        <HeaderText>
          <h1>
            {Title ? Title : "Projetos"}
          </h1>
        </HeaderText>
      </Container>
    </>
  )
}

export default VideoBackground