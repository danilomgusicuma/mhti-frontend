import { Button as MuiButton, ButtonProps } from '@mui/material';
import React from 'react';

const Button:React.FC<ButtonProps> = (props) => {
  return <MuiButton
    variant='contained'
    disableElevation
    style={{
      borderRadius: "24px",
      backgroundColor: `${props.disabled ? "rgba(7,33,57,0.12)" : "#4D5CB5"}`,
      fontWeight: 600,
      fontSize: "0.75em",
      lineHeight: "1.25em",
      padding: "8px 44px"
    }}
    {...props}
  >
    {props.children}
  </MuiButton>
}

export default Button;
