import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HomeScreen } from '~/modules/Client/screens/Home';
import { Router } from '~/routes';
import { theme } from '~/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
