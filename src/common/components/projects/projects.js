import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import wow from '../../img/wow.svg';
import noeyes from '../../img/noeyes.svg';

import { Trans } from 'react-i18next';

const Projects = () => {
  return (
    <>
      <Row className="padding">
        <Col>
          <h1 className="font-weight-bold">
            <Trans>Projects</Trans>
          </h1>
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
            <Trans>Stack</Trans>:{' '}
            <span className="font-weight-bold">React.js</span>,{' '}
            <span className="font-weight-bold">Redux</span>, Node.js,
            Express.js, MongoDB
          </h5>
          <h5>
            <Trans>Link</Trans>:
            <a
              href="https://www.notion.so/Xvent-project-b0e162ec82344ed5bad09c06caeb993a"
              target="blank"
            >
              <Button color="link" className="font-weight-bold">
                <Trans>Open project</Trans>
              </Button>
            </a>
          </h5>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col sm="2">
          <img className="pr-3" src={wow} alt="img" />
        </Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">Mini Blog</span>
          </h3>
          <h5>
            <Trans>Stack</Trans>:{' '}
            <span className="font-weight-bold">JavaScript</span>, Firebase
          </h5>
          <h5>
            <Trans>Link</Trans>:
            <a href="https://blog-minin.web.app/" target="blank">
              <Button color="link" className="font-weight-bold">
                <Trans>Open project</Trans>
              </Button>
            </a>
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
            <Trans>Stack</Trans>:{' '}
            <span className="font-weight-bold">React.js</span>,{' '}
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
          <h5>
            <Trans>Stack</Trans>: Wordpress, MySQL
          </h5>
          <h5>
            <Trans>Link</Trans>:
            <a href="https://www.zsport.md" target="blank">
              <Button color="link" className="font-weight-bold">
                <Trans>Open project</Trans>
              </Button>
            </a>
          </h5>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col sm="2"></Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">VIE.MD</span>
          </h3>
          <h5>
            <Trans>Stack</Trans>: Wordpress, MySQL
          </h5>
          <h5>
            <Trans>Link</Trans>:
            <a href="https://www.vie.md" target="blank">
              <Button color="link" className="font-weight-bold">
                <Trans>Open project</Trans>
              </Button>
            </a>
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
          <h5>
            <Trans>Stack</Trans>: HTML, CSS
          </h5>
          <h5>
            <Trans>Link</Trans>:
            <a href="https://www.radcor.md" target="blank">
              <Button color="link" className="font-weight-bold">
                <Trans>Open project</Trans>
              </Button>
            </a>
          </h5>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col sm="2"></Col>
        <Col sm="10">
          <h3>
            <span className="font-weight-bold">KGI.MD</span>
          </h3>
          <h5>
            <Trans>Stack</Trans>: Wordpress, MySQL
          </h5>
          <h5>
            <Trans>Link</Trans>:
            <a href="https://www.kgi.md" target="blank">
              <Button color="link" className="font-weight-bold">
                <Trans>Open project</Trans>
              </Button>
            </a>
          </h5>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
