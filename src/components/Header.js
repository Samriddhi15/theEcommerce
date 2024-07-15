import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";

const Header = ({ toggleTheme, darkMode }) => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/hero4.jpeg" alt="my logo img" style={{ width: '150px', height: 'auto' }} />
      </NavLink>
      <Nav />
      <ButtonWrapper>
        <SignInButton to="/signin">Sign In/Sign Up</SignInButton>
        <StyledIcon onClick={toggleTheme}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </StyledIcon>
      </ButtonWrapper>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SignInButton = styled(NavLink)`
  background-color: #000000;
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  text-decoration: none;
  margin-right: 1rem;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.helper};
  }
`;

const StyledIcon = styled.div`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.helper};
  }
`;

export default Header;
