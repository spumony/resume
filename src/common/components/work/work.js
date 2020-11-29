import React from 'react';
import { Col, Row } from 'reactstrap';
import painter from '../../img/painter.svg';
import developer from '../../img/developer.svg';

const Work = () => {
  return (
    <>
      <Row className="padding">
        <Col>
          <h1 className="font-weight-bold">Work experience</h1>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col sm="2" className="pt-5">
          <img className="pr-3" src={painter} alt="img" />
        </Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">Graphic Designer</span> in
            Exterior Security Systems
          </h3>
          <h5>OCT 2018 - APR 2019</h5>

          <ul className="bullet-list mt-3">
            <li>
              - Development of a creative concept for promotional materials
            </li>
            <li>- Development of models of printing products</li>
            <li>- Design of layouts for advertising indoor and outdoor</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm="2" className="pt-5">
          <img className="pr-3" src={developer} alt="img" />
        </Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">Web developer </span>freelance
          </h3>
          <h5>AUG 2019 - DEC 2019</h5>

          <ul className="bullet-list mt-3">
            <li>- Website development and support</li>
            <li>- Support and modernization of existing projects</li>
            <li>- Search and elimination of current errors in projects</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Work;
