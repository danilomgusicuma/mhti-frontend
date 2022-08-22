import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import theme from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h2'>The SafeSpace Solution;</Typography>
      <Typography variant='body1'>Our goal is not to serve as a self diagnosis or replace the need of searching for professional help, but to raise awareness on the theme and encourage people to seek help if needed.</Typography>
      <Typography variant='subtitle1'>Our goal is not to serve as a self diagnosis or replace the need of searching for professional help, but to raise awareness on the theme and encourage people to seek help if needed.</Typography>
      <Typography variant='subtitle2'>Our goal is not to serve as a self diagnosis or replace the need of searching for professional help, but to raise awareness on the theme and encourage people to seek help if needed.</Typography>
      <Typography variant='button'>Our goal is not to serve as a self diagnosis or replace the need of searching for professional help, but to raise awareness on the theme and encourage people to seek help if needed.</Typography>
    </ThemeProvider>
  );
}

export default App;
