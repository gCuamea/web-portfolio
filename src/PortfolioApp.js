import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Main } from './Components/Main';
import { Navbar } from './Components/Navbar';
import { Competencies } from './Components/Competencies';
import { Portfolio } from './Components/Portfolio';
import { Footer } from './Components/Footer';

import 'animate.css';

export const PortfolioApp = () => {
  const theme = {
    marginSideDefault: '0 3.5vw',
    marginSideProjects: '0 3.5vw 0 1vw',
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <Main />
        <Competencies />
        <Portfolio />
        <Footer />
      </>
    </ThemeProvider>
  );
};
