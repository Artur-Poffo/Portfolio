import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  height: 100%;
  padding: 15px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;

    img {
      border: 1px solid var(--contrast);
      border-radius: 15px;
      object-fit: cover;

      @media (max-width: 430px) {
        width: 100%;
        height: 200px;
      }
    }

    div {
      text-align: center;

      h2 {
        letter-spacing: 2.5px;
        margin-bottom: 10px;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        max-width: 400px;

        li {
          display: block;
          padding: 5px 8px;
          background-color: var(--contrast);
          color: var(--secondary);
          border-radius: 4px;
        }
      }
    }
  }
`