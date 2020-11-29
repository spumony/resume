import React from 'react';
import { Col, Row } from 'reactstrap';
import painter from '../../img/painter.svg';
import developer from '../../img/developer.svg';

import { Trans } from 'react-i18next';

const Work = () => {
  return (
    <>
      <Row className="padding">
        <Col>
          <h1 className="font-weight-bold">
            <Trans>Work experience</Trans>
          </h1>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col sm="2" className="pt-5">
          <img className="pr-3" src={painter} alt="img" />
        </Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">
              <Trans>Graphic Designer</Trans>
            </span>{' '}
            <Trans>in</Trans> Exterior Security Systems
          </h3>
          <h5>
            <Trans>OCT 2018 - APR 2019</Trans>
          </h5>

          <ul className="bullet-list mt-3">
            <li>
              -{' '}
              <Trans>
                Development of a creative concept for promotional materials
              </Trans>
            </li>
            <li>
              - <Trans>Development of models of printing products</Trans>
            </li>
            <li>
              -{' '}
              <Trans>
                Design of layouts for advertising indoor and outdoor
              </Trans>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm="2" className="pt-5">
          <img className="pr-3" src={developer} alt="img" />
        </Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">
              <Trans>Web developer</Trans>{' '}
            </span>
            <Trans>freelance</Trans>
          </h3>
          <h5>
            <Trans>AUG 2019 - DEC 2019</Trans>
          </h5>

          <ul className="bullet-list mt-3">
            <li>
              - <Trans>Website development and support</Trans>
            </li>
            <li>
              - <Trans>Support and modernization of existing projects</Trans>
            </li>
            <li>
              -{' '}
              <Trans>
                Search and elimination of current errors in projects
              </Trans>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Work;
