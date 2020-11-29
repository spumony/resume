import React from 'react';
import { Container } from 'reactstrap';
import Footer from './common/components/footer/footer';
import Header from './common/components/header/header';
import Navbar from './common/components/navbar/navbar';
import Projects from './common/components/projects/projects';
import Skills from './common/components/skills/skills';
import Work from './common/components/work/work';

import { useTranslation, Trans } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <h2>{t('Welcome to React')}</h2>
      <button onClick={() => changeLanguage('ru')}>ru</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <Trans>Welcome</Trans>

      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Projects />
      <Footer />
    </Container>
  );
};

export default App;
