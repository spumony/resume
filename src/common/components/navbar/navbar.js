import React from 'react';
import { Badge, Button, Col, Row } from 'reactstrap';

import telegram from '../../img/telegram.svg';
import linkedin from '../../img/linkedin.svg';
import gmail from '../../img/gmail.svg';
import github from '../../img/github.svg';

const Header = () => {
  return (
    <Row className="mt-5 justify-content-between">
      <Col sm="5">
        <span className="logo pr-4">CHUMAK ALEXANDER</span>
        <Button color="link" className="font-weight-bold">
          Русская версия
        </Button>
        <Badge color="success">OPEN TO WORK</Badge>
      </Col>
      <Col sm="5">
        <img className="pr-2" src={github} alt="img" />
        <img className="pr-2" src={gmail} alt="img" />
        <img className="pr-2" src={linkedin} alt="img" />
        <img className="pr-3" src={telegram} alt="img" />
        <Button color="primary" size="sm" className="font-weight-bold">
          DOWNLOAD RESUME.PDF
        </Button>
      </Col>
    </Row>
  );
};

export default Header;
