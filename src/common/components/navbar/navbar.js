import React, { useState } from 'react';
import { Trans } from 'react-i18next';

import telegram from '../../img/telegram.svg';
import linkedin from '../../img/linkedin.svg';
import github from '../../img/github.svg';
import {
  Collapse,
  Navbar as NavBar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  Badge,
  Col,
  Button,
} from 'reactstrap';

const Navbar = ({ language, changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavBar className="mt-5" color="transparent" light expand="md">
      <Col sm="4">
        <span className="logo pr-4">
          <Trans>CHUMAK ALEXANDER</Trans>
        </span>
        <h6>ciumac.dev@gmail.com</h6>
        <Badge color="success">
          <Trans>OPEN TO WORK</Trans>
        </Badge>
      </Col>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
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
          </NavItem>
        </Nav>
        <NavbarText>
          <a className="pr-2" href="https://github.com/spumony" target="blank">
            <img src={github} alt="img" />
          </a>
          <a
            className="pr-2"
            href="https://www.linkedin.com/in/ciumac-dev/"
            target="blank"
          >
            <img src={linkedin} alt="img" />
          </a>
          <a className="pr-3" href="https://t.me/spumony" target="blank">
            <img src={telegram} alt="img" />
          </a>

          <a
            href="https://drive.google.com/file/d/1aOPrznnjHuDT74yHVPmLC8YvKeBDwoqH/view?usp=sharing"
            target="blank"
          >
            <Button color="primary" size="sm" className="font-weight-bold">
              <Trans>DOWNLOAD RESUME.PDF</Trans>
            </Button>
          </a>
        </NavbarText>
      </Collapse>
    </NavBar>
  );
};

export default Navbar;
