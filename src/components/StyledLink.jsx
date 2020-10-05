import styled from "styled-components";

export const StyledLink = styled.a`
  border-bottom: 2px solid #fdd835;
  font-weight: 500;
  color: #262626;
  height: 30;
  padding: 0 5px;
  font-family: Montserrat, sans-serif;
  text-transform: lowercase;
  text-decoration: none;
  transition: border-bottom 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:focus-within {
    border-bottom: 5px solid #17bebb;
  }
`;
