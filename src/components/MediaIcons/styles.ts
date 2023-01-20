import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    opacity: .7;
    font-size: 2.3rem;
    cursor: pointer;
    transition: .4s ease;

    &:hover {
      opacity: 1;
    }
  }
`