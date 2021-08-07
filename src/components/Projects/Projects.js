import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import colabmusic from "../../Assets/Projects/colabmusic.png";
import cryptocurrency from "../../Assets/Projects/cryptocurrency.png";
import facultyfinder from "../../Assets/Projects/facultyfinder.png";
import credenzlive from "../../Assets/Projects/credenzlive.png";
import menstrualhygiene from "../../Assets/Projects/menstrualhygiene.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credenzlive}
              isBlog={false}
              title="Clash Web Portal"
              description="Web application for problem-solving quiz platform for annual tech-fest Credenz by IEEE with features like lifelines and varying marking schemes.
              Major contribution in backend development and database management using technologies like Python, Django, SQLite, HTML, CSS, JavaScript, jQuery, AJAX."
              link="https://github.com/dclavekar/Credenz-Clash-Portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colabmusic}
              isBlog={false}
              title="Collaborative Music Player"
              description="A full-stack web application using a third-party API (Spotify) for developing a collaborative music-playing system. Creates rooms for people to join and control music playing on Spotify. Tech Stack used: Django, Django REST Framework, React, Material-UI, Babel, Heroku"
              link="https://github.com/dclavekar/Collaborative-Music-Player"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menstrualhygiene}
              isBlog={false}
              title="Menstrual Hygiene Awareness Fundraiser"
              description="A full-stack web application for spreading awareness about menstrual hygiene and raising funds for supply of sanitary products. Important features like
              payment gateway integration and custom email delivery are implemented with a responsive frontend.
              Tech stack used: Django, Python, HTML, CSS, Bootstrap, Heroku.
              Project can be viewed on GitHub."
              
              link="https://donatebydcl.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptocurrency}
              isBlog={false}
              title="Cryptocurrency CommonCoin"
              description="In the era of cryptocurrency, CommonCoin is a new cryptocurrency which helps students in college to make use of cashless modes of transfer and get an experience in handling cryptocurrency transactions. Tech stack used is HTML, CSS, Bootstrap, Python, Flask, MySQL, Blockchain.
              "
              link="https://github.com/dclavekar/CommonCoin"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facultyfinder}
              isBlog={false}
              title="Faculty Finder"
              description="This is a PC based application developed in Python. It helps students find the location of a Faculty according to faculty's timetable. The Faculty is provided with a secure login through which different functionalities can be accessed. It uses Python modules like xlrd, uic, PyQt5. Tools like Microsoft Excel, QT designer etc are used in the development process."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ValEasy"
              description="yet to deploy"
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
