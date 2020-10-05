import styled from "styled-components";

export const StyledNavigationBar = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  flex-direction: row;
  background: #262626;
  font-size: 18px;
  z-index: 1000;
  height: 4em;
  align-items: center;
`;

export const StyledLogo = styled.a`
  margin-left: 2em;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  letter-spacing: 3px;
`;

export const YellowAccent = styled.span`
  color: #fdd835;
`;

export const NavigationWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    padding-top: 0.1rem;
    position: absolute;
    right: 0.5rem;
  }
`;

export const NavigationLink = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  font-weight: 500;
  transition: border-bottom 0.3s ease-in-out;
  border-bottom: 1px solid #fdd835;
  margin-top: 0.4rem;
  margin-right: 2rem;

  &:hover,
  &:focus,
  &:focus-within {
    border-bottom: 5px solid #17bebb;
    color: #ffffff;
  }
`;
