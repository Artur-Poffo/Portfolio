import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 940px) {
    padding: 30px 15px;
    flex-direction: column;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 560px;

  h1 {
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 3px;
  }

  p {
    font-size: 1.08rem;
    line-height: 24px;

    a {
      color: var(--primary);
      text-decoration: underline;
      letter-spacing: 1.2px;
    }
  }
`