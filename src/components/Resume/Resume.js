import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import pdf from "../../Assets/DhanashreeLavekar_InternshipResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
//   const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
//   const [spojRank, upadteSpojRank] = useState(0);
//   const [hackerrank, upadteHackerank] = useState(0);
//   const [sem, upadateSem] = useState(0);
//   const [cgpa, upadteCgpa] = useState(0);

//   useEffect(() => {
//     axios
//       .get(uri)
//       .then((res) => {
//         upadteSpojRank(res.data.message[0].spojRank);
//         upadteHackerank(res.data.message[1].hackerrank);
//         upadteCgpa(res.data.message[2].cgpa);
//         upadateSem(res.data.message[3].sem);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Internship</h3>
            <Resumecontent
              title="Web development and Design Intern"
              date="The Sparks Foundation | July 2021 - August 2021"
              content={[
                "Developed a fundraiser full-stack web application for spreading awareness about menstrual hygiene with important features like payment gateway integration and custom email delivery.",
                
                "Tech stack used: Django, Python, HTML, CSS, Bootstrap, Heroku."
                
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
        
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="SCTR’s Pune Institute of Computer Technology, Pune"
              date="B.E. Information Technology (2019 - 2023)"
              content={[`CGPA: 9.53 (Till 4th Sem)`,`SGPA: 9.035, 9.64, 9.91, 9.55`]}
            />
            <Resumecontent
              title="Sarosh Junior College, Aurangabad"
              date="HSC (2017 - 2019)"
              content={["Percentage: 84.0%"]}
            />
            <Resumecontent
              title="S.B.O.A. Public School, Aurangabad"
              date="SSC (2017)"
              content={["Percentage: 99.8%","Asst. Vice-Captain (2014-15)","School topper in SSC Boards","Among the top 2 scorers from the class of 60 students, for every academic year since 2005"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Resume;
