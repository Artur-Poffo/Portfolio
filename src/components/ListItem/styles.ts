import styled from "styled-components";

export const Item = styled.li`
  display: block;
  text-align: center;
  padding: 7px;
  background-color: var(--contrast);
  color: var(--secondary);
  border-radius: 5px;
  transition: all .3s ease;

  &:hover {
    background-color: var(--primary);
    color: var(--text);
  }
`