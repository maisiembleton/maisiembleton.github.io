import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialBlock = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem;
  color: #fdd835;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus,
  &:focus-within {
    color: #ffffff;
    border-bottom: 1px solid #fff;
    text-decoration: none;
  }
`;

export const Label = styled.span`
  color: ${(props) => (props.isLightBackground ? "#000000" : "#fff")};
`;
