import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
`;

export const HeaderText = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.light};
`;
