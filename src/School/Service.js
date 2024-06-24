import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

const Service = () => {
  return (
    <>
            <Main>
                  <div className="title">
                     <h2>Services we offer</h2>
                  </div>
            </Main>

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Container>
          <div className="one">
            <div className="image">
              <img src="img/Code_perspective_matte.jpg" alt="img" />
            </div>
            <h3>Web Design & Development</h3>
            ____
            <p>
              A Website is an extension of yourself and we can help you to
              express it properly. 
            </p>
          </div>
          <div className="one">
            <div className="image">
              <img src="img/Dashboard_perspective_matte.png" alt="img" />
            </div>
            <h3>Software Testing Service</h3>
            ____
            <p>
              A Website is an extension of yourself and we can help you to
              express it properly.
            </p>
          </div>
        </Container>
        <Carousel.Caption>
          {/* <h5>First slide label</h5> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <div className="one">
            <div className="image">
              <img src="img/Code_perspective_matte.jpg" alt="img" />
            </div>
            <h3>Certified Teacher</h3>
            ____
            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="one">
            <div className="image">
              <img src="img/Dashboard_perspective_matte.png" alt="img" />
            </div>
            <h3>Certified Teacher</h3>
            ____
            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </Container>
        <Carousel.Caption>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <div className="one">
            <div className="image">
              <img src="img/Code_perspective_matte.jpg" alt="img" />
            </div>
            <h3>Certified Teacher</h3>
            ____
            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="one">
            <div className="image">
              <img src="img/Dashboard_perspective_matte.png" alt="img" />
            </div>
            <h3>Certified Teacher</h3>
            ____
            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </Container>
        <Carousel.Caption>{/* <h5>Third slide label</h5> */}</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Service;

const Container = styled.section`
display: flex;
height: 400px;
align-items: center;
text-align: center;
justify-content: space-around;
background-color: #f9f9ff;
padding: 20px;

.one {
  width: 100%;
  max-width: 333px;
  height: 287px;
  gap: 0px;
  opacity: 1;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 8px 10px #888888;
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid rgba(87, 0, 123, 1);
  }
}

@media (max-width: 768px) {
  flex-direction: column;
  height: auto;

  .one {
    width: 80%;
    margin: 10px 0;
  }
}
`;

const Main = styled.section`
.title h2 {
  font-family: 'Inter', sans-serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 55px;
  text-align: center;
}

@media (max-width: 768px) {
  .title h2 {
    font-size: 28px;
    line-height: 45px;
  }
}
`;


