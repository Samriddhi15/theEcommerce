import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  // const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="hero-section-data" style={{ color: 'white' }}>
          <p className="intro-data" style={{ color: 'white' }}>Welcome to </p>
          <h1 style={{ color: 'white' }}> Sam Store </h1>
          <p style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            atque temporibus veniam doloribus libero ad error omnis voluptates
            animi! Suscipit sapiente.
          </p>
          <NavLink>
            <Button>Shop Now</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('images/hero1.jpg') no-repeat center center/cover;

  .container {
    position: absolute;
    top: 30%; /* Adjust this value to move the content higher or lower */
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white; /* Ensure text color is white */
  }

  .hero-section-data {
    color: white; /* Ensure text color is always white */

    p {
      margin: 1rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .intro-data {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      padding: 1rem;
      top: 50%; /* Adjust mobile view position if needed */
    }

    .hero-section-data {
      p, h1 {
        margin: 1rem 0;
      }
    }
  }
`;

export default HeroSection;
