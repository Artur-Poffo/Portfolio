import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    span {
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 1.8px;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      padding: 0px 10px;
    }
  }
`