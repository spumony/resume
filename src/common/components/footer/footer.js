import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import telegram from '../../img/telegram.svg';
import linkedin from '../../img/linkedin.svg';
import gmail from '../../img/gmail.svg';
import github from '../../img/github.svg';

const Footer = () => {
  return (
    <Row className="padding mb-5 ">
      <Col sm="12" className="d-flex justify-content-center">
        <img className="pr-3" src={github} alt="img" />
        <img className="pr-3" src={gmail} alt="img" />
        <img className="pr-3" src={linkedin} alt="img" />
        <img className="pr-5" src={telegram} alt="img" />
        <Button color="primary" size="sm" className="font-weight-bold">
          DOWNLOAD RESUME.PDF
        </Button>
      </Col>
    </Row>
  );
};

export default Footer;
