import React from 'react';
import { Col, Row } from 'reactstrap';
import { Trans } from 'react-i18next';

import wave from '../../img/wave.svg';

const Header = () => {
  return (
    <Row className="justify-content-between padding">
      <Col sm="10">
        <h1 className="font-weight-bold">
          <Trans>Welcome to my website</Trans>!
        </h1>
        <h1 className="font-weight-bold">
          <Trans>My name is Alex. I’m middle</Trans>{' '}
          <span className="text-muted">
            <Trans>frontend</Trans>
          </span>{' '}
          <Trans>developer</Trans>
        </h1>
      </Col>
      <Col sm="2">
        <img src={wave} alt="img" />
      </Col>
    </Row>
  );
};

export default Header;
