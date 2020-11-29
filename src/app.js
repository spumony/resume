import React from 'react';

import { Container } from 'reactstrap';
import Footer from './common/components/footer/footer';
import Header from './common/components/header/header';
import Navbar from './common/components/navbar/navbar';
import Projects from './common/components/projects/projects';
import Skills from './common/components/skills/skills';
import Work from './common/components/work/work';

const App = () => {
  return (
    <Container>
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
