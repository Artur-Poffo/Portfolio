import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  label {
    padding: 0 0 0 2px;
    color: var(--secondary);
    letter-spacing: 2px;
  }

  input {
    width: 100%;
    height: 40px;
    background-color: var(--background);
    color: var(--text);
    border: 2px solid transparent;
    border-radius: 4px;
    padding: 0 10px;
    transition: all .3s ease;

    &:focus {
      border: 2px solid var(--primary);
    }
  }
`