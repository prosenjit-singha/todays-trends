import styled from "styled-components";

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  color: hsla(0, 0%, 50%, 0.5);
  margin-bottom: 0.5rem;
  justify-content: space-between;
`;

export const News = styled.div`
  padding: 1rem 0;
  &:is(:first-child) {
    padding-top: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 50%, 0.25);
  }
`;

export const Item = styled.div``;
