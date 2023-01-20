import styled from "styled-components";

export const Btn = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: var(--secondary);
  border: 2px solid var(--primary);
  border-radius: 3px;
  transition: .3s ease;
  cursor: pointer;

  &:hover{
    background-color: var(--primary);
    color: var(--text);
  }
`