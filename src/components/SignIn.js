import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Sign In</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    background: ${({ theme }) => theme.colors.white};
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 400px;

    h1 {
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors.heading};
    }

    .input-group {
      margin-bottom: 1rem;
      text-align: left;

      label {
        display: block;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.colors.text};
      }

      input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 5px;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.inputBg}; // Set input background
      }
    }

    button {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }

    p {
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.text};

      a {
        color: #007bff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default SignIn;
