import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../../assets/react-toolbox/theme'

import PatientIngest from '../PatientIngest';
import './styles.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={PatientIngest} />
    </Switch>
  </ThemeProvider>
);

export default App;
