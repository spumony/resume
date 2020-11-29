import React from 'react';
import { Alert, Container } from 'reactstrap';
import Footer from './common/components/footer/footer';
import Header from './common/components/header/header';
import Navbar from './common/components/navbar/navbar';
import Projects from './common/components/projects/projects';
import Skills from './common/components/skills/skills';
import Work from './common/components/work/work';
import { BrowserRouter as Router } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <Container>
        <Navbar language={i18n.language} changeLanguage={changeLanguage} />
        <Header />
        <Skills />
        <Work />
        <Projects />
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
