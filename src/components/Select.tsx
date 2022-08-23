import { createTheme, FormControl, InputLabel, Select as MuiSelect, SelectProps, ThemeProvider } from '@mui/material';
import React from 'react';

const Select:React.FC<SelectProps> = (props) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#4D5CB5'
      }
    }
  })

  return <FormControl style={{
    margin: "12px 0px"
  }}>
    <ThemeProvider theme={theme}>
    <InputLabel size='small' color='primary'>{props.label}</InputLabel>
    
      <MuiSelect
        {...props}
        size='small'
        color='primary'
          label={props.label}
        >
        {props.children}
    </MuiSelect>
    </ThemeProvider>
  </FormControl>
}

export default Select;