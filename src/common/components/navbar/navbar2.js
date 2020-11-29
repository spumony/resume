import React from 'react';
import {
  Badge,
  Button,
  Col,
  PopoverHeader,
  Row,
  UncontrolledPopover,
} from 'reactstrap';
import { Trans } from 'react-i18next';

import telegram from '../../img/telegram.svg';
import linkedin from '../../img/linkedin.svg';
import github from '../../img/github.svg';

const Header = ({ language, changeLanguage }) => {
  return (
    <Row className="mt-5 justify-content-between">
      <Col sm="3">
        <span className="logo">
          <Trans>CHUMAK ALEXANDER</Trans>
        </span>

        <h6>ciumac.dev@gmail.com</h6>

        <Badge color="success">
          <Trans>OPEN TO WORK</Trans>
        </Badge>
      </Col>
      <Col sm="3">
        {language === 'en' ? (
          <Button
            color="link"
            className="font-weight-bold"
            onClick={() => changeLanguage('ru')}
          >
            Русская версия
          </Button>
        ) : (
          <Button
            color="link"
            className="font-weight-bold"
            onClick={() => changeLanguage('en')}
          >
            English version
          </Button>
        )}
      </Col>
      <Col sm="3">
        <a href="https://github.com/spumony" target="blank">
          <img className="pr-2" src={github} alt="img" />
        </a>
        <a href="https://www.linkedin.com/in/ciumac-dev/" target="blank">
          <img className="pr-2" src={linkedin} alt="img" />
        </a>

        <a href="https://t.me/spumony" target="blank">
          <img src={telegram} alt="img" />
        </a>
      </Col>
      <Col sm="3">
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

export default Header;
