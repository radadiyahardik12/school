import React from "react";
import styled from "styled-components";

const One = () => {
  return (
    <Footer>
      <div className="footer_tag">
        <div className="footer_main">
          <h1>Meet the People We are Working With</h1>
        </div>
        <div className="footer">
          <img src="img/Logo-list.png" alt="Company Logos" />
        </div>
      </div>
    </Footer>
  );
};

export default One;

const Footer = styled.section`
  .footer_tag {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .footer_main {
    text-align: center;
    margin: 20px 0;
  }

  .footer_main h1 {
    font-weight: 700;
    font-size: 1.5em;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .footer img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    .footer_main {
      text-align: center;
      margin: 0 auto 20px;
    }

    .footer img {
      max-width: 70%;
    }
  }

  @media (min-width: 1024px) {
    .footer_main {
      margin-top: 100px;
    }

    .footer img {
      max-width: 60%;
    }
  }
`;
