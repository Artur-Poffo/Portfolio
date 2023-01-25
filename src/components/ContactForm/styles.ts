import styled from "styled-components";

export const Form = styled.form`
  padding: 40px;
  background-color: var(--contrast);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  h1 {
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--primary);
    margin-bottom: 30px;
  }

  textarea {
    width: 100%;
    background-color: var(--background);
    border: 2px solid transparent;
    border-radius: 4px;
    color: var(--text);
    padding: 10px;
    transition: all .3s ease;

    &:focus {
      border: 2px solid var(--primary);
    }
  }
`