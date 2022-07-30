import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import orange from 'material-ui/colors/orange';
import Navigation from '../components/Navigation';
import '../style/global';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#57687c',
      main: '#2c3e50',
      dark: '#031828',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#CFD8DC',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  status: {
    danger: 'orange',
  }
});

export default ({ children, location }) => (
  <MuiThemeProvider theme={theme}>
  <main>
    {children()}
    <Navigation location={location} />
  </main>
  </MuiThemeProvider>
  )