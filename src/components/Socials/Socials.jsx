import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialBlock = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  border-bottom: 1px solid #fdd835;
  color: #fdd835;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:focus-within {
    color: #ffffff;
    border-bottom: 1px solid #fff;
  }
`;

export const Label = styled.span`
  color: ${(props) => (props.isLightBackground ? "#000000" : "#fff")};
`;
