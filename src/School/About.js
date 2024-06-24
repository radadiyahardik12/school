import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutMe>
      <div className="main_div1">
        <div className="left">
          <h1>Leading companies trust us to Develop software</h1>
          <h6>
            We add development capacity to tech teams. Our value isn’t limited
            to building the team but is equally distributed across the project
            lifecycle. We are a custom software development company that
            guarantees the successful delivery of your project.
          </h6>
          <p>See more Information</p>
        </div>
        <div className="right">
          <img src="img/Rectangle 9.png" alt="Development" />
        </div>
      </div>
    </AboutMe>
  );
};

export default About;

const AboutMe = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 130px;
  padding: 0 20px;

  .main_div1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .left,
  .right {
    width: 100%;
    padding: 10px;
  }

  .left h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .left h6 {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .left p {
    color: rgba(87, 0, 123, 1);
    cursor: pointer;
    margin-top: 30px;
  }

  .right img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    .main_div {
      flex-direction: row;
      align-items: flex-start;
      text-align: left;
      width: 80%;
    }

    .left,
    .right {
      width: 50%;
    }

    .left {
      padding-right: 20px;
    }

    .right {
      padding-left: 20px;
    }

    .left p {
      margin-top: 10px;
      margin-right: auto;
    }
  }
`;
