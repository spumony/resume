import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import wow from '../../img/wow.svg';
import noeyes from '../../img/noeyes.svg';

const Projects = () => {
  return (
    <>
      <Row className="padding">
        <Col>
          <h1 className="font-weight-bold">Projects</h1>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col sm="2">
          <img className="pr-3" src={wow} alt="img" />
        </Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">XVENT</span>
          </h3>
          <h5>
            Stack: <span className="font-weight-bold">React.js</span>,{' '}
            <span className="font-weight-bold">Redux</span>, Node.js,
            Express.js, MongoDB
          </h5>
          <h5>
            Link:
            <Button color="link" className="font-weight-bold">
              Open project
            </Button>
          </h5>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col sm="2"></Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">DEVCONNECTOR</span>
          </h3>
          <h5>
            Stack: <span className="font-weight-bold">React.js</span>,{' '}
            <span className="font-weight-bold">Redux</span>, Node.js,
            Express.js, MongoDB
          </h5>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col sm="2"></Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">ZSPORT.MD</span>
          </h3>
          <h5>Stack: Stack: Wordpress, MySQL</h5>
          <h5>
            Link:
            <Button color="link" className="font-weight-bold">
              Open project
            </Button>
          </h5>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col sm="2"></Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">VIE.MD</span>
          </h3>
          <h5>Stack: Stack: Wordpress, MySQL</h5>
          <h5>
            Link:
            <Button color="link" className="font-weight-bold">
              Open project
            </Button>
          </h5>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col sm="2">
          <img className="pr-3" src={noeyes} alt="img" />
        </Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">RADCOR.MD</span>
          </h3>
          <h5>Stack: Stack: HTML, CSS</h5>
          <h5>
            Link:
            <Button color="link" className="font-weight-bold">
              Open project
            </Button>
          </h5>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col sm="2"></Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">KGI.MD</span>
          </h3>
          <h5>Stack: Wordpress, MySQL</h5>
          <h5>
            Link:
            <Button color="link" className="font-weight-bold">
              Open project
            </Button>
          </h5>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
