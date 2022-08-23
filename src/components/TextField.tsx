import { createTheme, TextField as MuiTextField, TextFieldProps, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D5CB5'
    }
  }
})

const TextField:React.FC<TextFieldProps> = (props) => {
  return <ThemeProvider theme={theme}>
    <MuiTextField
      size='small'
      {...props}
    >
      {props.children}
    </MuiTextField>
  </ThemeProvider>
}

export default TextField;