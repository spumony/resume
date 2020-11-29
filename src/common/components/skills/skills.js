import React from 'react';
import { Col, Row } from 'reactstrap';

import swim from '../../img/swim.svg';
import film from '../../img/film.svg';
import reading from '../../img/reading.svg';
import waterpolo from '../../img/waterpolo.svg';
import music from '../../img/music.svg';
import soccer from '../../img/soccer.svg';

import { Trans } from 'react-i18next';

const Skills = () => {
  return (
    <Row className="padding">
      <Col sm="6">
        <h1 className="font-weight-bold">
          <Trans>Skills</Trans>
        </h1>
        <ul className="bullet-list">
          <li><Trans>Development</Trans>:</li>
          <li>- HTML / CSS / SCSS</li>
          <li className="font-weight-bold">- Javascript</li>
          <li className="font-weight-bold">- React.js</li>
          <li className="font-weight-bold">- Redux</li>
          <li>- Node.js</li>
          <li>- Express.js</li>
          <li>- MongoDB</li>
          <li>- SQL (MySQL)</li>
          <li>--------------------------</li>
          <li><Trans>Design</Trans>:</li>
          <li>- Adobe Photoshop</li>
          <li>- Adobe Illustrator</li>
          <li>- Figma</li>
        </ul>
      </Col>
      <Col sm="6">
        <h1 className="font-weight-bold"><Trans>Languages</Trans></h1>
        <ul className="bullet-list">
          <li><Trans>Russian - native</Trans></li>
          <li><Trans>Romanian - advanced</Trans></li>
          <li><Trans>English - upper intermediate</Trans></li>
        </ul>

        <h1 className="font-weight-bold"><Trans>Education</Trans></h1>
        <ul className="bullet-list">
          <li><Trans>Technical University of Moldova</Trans></li>
          <li><Trans>Bachelor in IT 2015 - 2018</Trans></li>
          <li> &#8192; </li>
          <li><Trans>Technical University of Moldova</Trans></li>
          <li><Trans>Master in IT 2018 - 2020</Trans></li>
        </ul>

        <h1 className="font-weight-bold"><Trans>Hobby</Trans></h1>
        <ul className="bullet-list">
          <li>
            <img className="pr-3" src={swim} alt="img" />
            <img className="pr-3" src={film} alt="img" />
            <img className="pr-3" src={soccer} alt="img" />
            <img className="pr-3" src={waterpolo} alt="img" />
            <img className="pr-3" src={music} alt="img" />
            <img src={reading} alt="img" />
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Skills;
