import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I am <span className="purple">Dhanashree Lavekar </span>
            from <span className="purple"> Pune, India.</span>
            {/* <br />I am an Information Technology Engineering undergraduate from SCTR's Pune Institute of Computer Technology. */}
            <br />Working my way through Hustle and procastination, I have succeeded in acquiring various skills. I am looking forward to learning everything that comes in my way and make effective use out of it.
            <br />I am a quick learner and a curious person. You will find me asking questions everytime you find me ignorant about something. 
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Learning something from each new day"{" "}
          </p>
          <footer className="blockquote-footer">dclavekar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
