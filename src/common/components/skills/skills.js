import React from 'react';
import { Col, Row } from 'reactstrap';

import swim from '../../img/swim.svg';
import film from '../../img/film.svg';
import reading from '../../img/reading.svg';
import waterpolo from '../../img/waterpolo.svg';
import music from '../../img/music.svg';
import soccer from '../../img/soccer.svg';

const Skills = () => {
  return (
    <Row className="padding">
      <Col sm="6">
        <h1 className="font-weight-bold">Skills</h1>
        <ul className="bullet-list">
          <li>Development:</li>
          <li>- HTML / CSS / SCSS</li>
          <li className="font-weight-bold">- Javascript</li>
          <li className="font-weight-bold">- React.js</li>
          <li className="font-weight-bold">- Redux</li>
          <li>- Node.js</li>
          <li>- Express.js</li>
          <li>- MongoDB</li>
          <li>- SQL (MySQL)</li>
          <li>--------------------------</li>
          <li>Design:</li>
          <li>- Adobe Photoshop</li>
          <li>- Adobe Illustrator</li>
          <li>- Figma</li>
        </ul>
      </Col>
      <Col sm="6">
        <h1 className="font-weight-bold">Languages</h1>
        <ul className="bullet-list">
          <li>Russian - native</li>
          <li>Romanian - advanced</li>
          <li>English - upper intermediate</li>
        </ul>

        <h1 className="font-weight-bold">Languages</h1>
        <ul className="bullet-list">
          <li>Technical University of Moldova</li>
          <li>Bachelor in IT 2015 - 2018</li>
          <li> &#8192; </li>
          <li>Technical University of Moldova</li>
          <li>Master in IT 2018 - 2020</li>
        </ul>

        <h1 className="font-weight-bold">Hobby</h1>
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
