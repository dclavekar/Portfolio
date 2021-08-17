import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../../Assets/css/styles.css";
import lottie from "lottie-web";

function Home2() {
    const home2GIF = useRef(null);

    useEffect(() => {
      lottie.loadAnimation({
          container: home2GIF.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../../Assets/animation/meditatingGirl.json'),
      });
  }, []);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className=" home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className=" home-about-body">
              I am a third year undergraduate from Pune Institute of Computer
              Technology pursuing Information technology Engineering.
              <br />
              <br />I am a self taught{" "}
              <i>
                <b className="purple"> full stack web developer </b>
              </i>{" "}
               , who is cultivating interest in{" "}
              <i>
                <b className="purple"> Competetive programming</b>
              </i>
              . I am also enthusiastic to learn{" "}
              <i>
                <b className="purple"> Data Science </b>
              </i>{" "}
              and dive into the ocean of{" "}
              <i>
                <b className="purple"> Machine Learning </b>
              </i>
              . <br />
              I have a keen interest in developing systems that can solve real-life problems. <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> C++, Data structures and algorithms, Python and Django. </b>
              </i>
              <br />
              <br />
              Apart from learning technology, you can find me indulged in
              nature, dancing to the tunes of music, engulfed in some fictional
              world of books or narrating a story through my words.
              <br />
              I am an ambivert- a perfect blend of an outgoing extrovert who 'loves making friends and have fun' and an introvert who 'loves spending time alone and enjoy being in peaceful surroundings'. 
              <br />Also, I am addicted to smiles!<br />
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
          <Col md={4}>
            <div
              style={{paddingTop:50, paddingBottom: 10 }}
              className="home2GIF home2-medgirl"
              ref={home2GIF}
            ></div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dclavekar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
               <li className="social-icons">
                <a
                  href="dclavekar@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dclavekar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dclavekar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
