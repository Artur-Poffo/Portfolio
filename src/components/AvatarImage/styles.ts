import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all .4s ease;

  &:hover {
    padding: 0;
  }
`

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`