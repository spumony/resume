import React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { Button, Col, Row } from 'reactstrap';
import telegram from '../../img/telegram.svg';
import linkedin from '../../img/linkedin.svg';
import gmail from '../../img/gmail.svg';
import github from '../../img/github.svg';

const Footer = () => {
  return (
    <Row className="padding mb-5 ">
      <Col sm="12" className="d-flex justify-content-center">
        <a href="https://github.com/spumony" target="blank">
          <img className="pr-2" src={github} alt="img" />
        </a>
        <a href="https://www.linkedin.com/in/ciumac-dev/" target="blank">
          <img className="pr-2" src={linkedin} alt="img" />
        </a>
        <a href="https://t.me/spumony" target="blank">
          <img className="pr-3" src={telegram} alt="img" />
        </a>
        <a
          href="https://drive.google.com/file/d/1aOPrznnjHuDT74yHVPmLC8YvKeBDwoqH/view?usp=sharing"
          target="blank"
        >
          <Button color="primary" size="sm" className="font-weight-bold">
            <Trans>DOWNLOAD RESUME.PDF</Trans>
          </Button>
        </a>
      </Col>
    </Row>
  );
};

export default Footer;
