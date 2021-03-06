import React, {useEffect, useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";

// import homeLogo from "../../Assets/home-main.svg";
// import homeLogo from "../../Assets/me.jpg";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import lottie from 'lottie-web';
import "../../Assets/css/styles.css";

function Home() {

  
  const homeGIF=useRef(null);

  useEffect(()=>{
  lottie.loadAnimation(
    {
      container:homeGIF.current,
      scale:50,
      renderer:'svg',
      loop:true,
      autoplay:true,
      
      animationData: require("../../Assets/animation/webdevGirl.json")
    }
  );
  },[]
  );

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> DHANASHREE LAVEKAR</strong>
              </h1>             
              <div style={{ padding: 50, textAlign: "left" }}>
              
                <Type />
              </div>

            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={me} alt="home pic" className="my-image img-fluid" />
            </Col> */}
            <Col md={4} style={{ paddingTop:30, paddingBottom: 20 }} className="homeGIF" ref={homeGIF}></Col>
            
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
