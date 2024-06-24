import React from 'react';
import styled from 'styled-components';
import profile from './data/profile.json';
import { FaStar } from 'react-icons/fa';

const Two = () => {
  return (
    <Main>
      <div className="container_title">
        <h1>Why customers love working with us</h1>
        <p>
          Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of
          the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.
        </p>
      </div>
      <Profile>
        {profile.map((data) => (
          <div key={data.id} className="list">
            <div className="top">
              <img src={`/img/${data.imageSrc}`} alt="img" />
            </div>
            <div className="bottom">
              <h6>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </h6>
              <h3>{data.info}</h3>
              <h5>{data.short}</h5>
            </div>
          </div>
        ))}
      </Profile>
    </Main>
  );
};

export default Two;

const Main = styled.section`
  .container_title {
    text-align: center;
    margin: 130px auto 0 auto;
    width: 80%;
    max-width: 800px;
    padding: 0 20px;
  }

  .container_title h1 {
    margin-bottom: 20px;
    font-size: 2em;
  }

  .container_title p {
    margin-top: 20px;
    font-size: 1.2em;
  }

  @media (min-width: 600px) {
    .container_title {
      width: 60%;
    }
  }

  @media (min-width: 900px) {
    .container_title {
      width: 50%;
    }
  }
`;

const Profile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    width: 100%;
    max-width: 300px;
    text-align: center;
  }

  .top img {
    border-radius: 50%;
    max-width: 100%;
    height: auto;
  }

  .bottom h6 {
    margin-top: 10px;
    color: #FFD700; 
  }

  .bottom h3 {
    margin-top: 10px;
    font-size: 1.2em;
  }

  .bottom h5 {
    margin-top: 5px;
    font-size: 1em;
    color: grey;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
