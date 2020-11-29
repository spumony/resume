import React from 'react';
import { Col, Row } from 'reactstrap';
import wave from '../../img/wave.svg';

const Header = () => {
  return (
    <Row className="justify-content-between padding">
      <Col sm="10">
        <h1 className="font-weight-bold">Welcome to my website</h1>
        <h1 className="font-weight-bold">
          My name is Alex. I’m <span className="text-muted">frontend</span>{' '}
          developer
        </h1>
      </Col>
      <Col sm="2">
        <img src={wave} alt="img" />
      </Col>
    </Row>
  );
};

export default Header;
