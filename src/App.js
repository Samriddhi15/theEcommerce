import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './About';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  const darkTheme = {
    colors: {
      heading: "rgb(255 255 255)",
      text: "rgba(255, 255, 255, .8)",
      white: "#fff",
      black: "#000",
      helper: "#8490ff",
      bg: "#212529",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(255, 255, 255, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(255, 255, 255, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Container className="py-4">
          <ButtonWrapper>
            <StyledButton onClick={toggleTheme}>
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </StyledButton>
          </ButtonWrapper>
        </Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
 
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btn};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.helper};
  }
`;

export default App;
