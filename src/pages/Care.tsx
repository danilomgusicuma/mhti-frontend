import React from 'react';
import { SurveySection } from './../components/Section';
import logo from './../assets/images/safespace-logo.svg';
import styled from 'styled-components';
import { EmployeeAnswers } from './../models/models';
import { TypographyBody1, TypographyH2 } from '../components/Typography';
import SectionStack from '../components/SectionStack';
import { createTheme, LinearProgress, ThemeProvider } from '@mui/material';
import { styled as MuiStyled} from '@mui/material/styles';
import firstImg from '../assets/images/better-help.png';
import secondImg from '../assets/images/ifd.png';
import thirdImg from '../assets/images/just-answer.png';
import illustration from '../assets/images/Illustration.png';

interface CoverProps {
  ref?: React.Ref<HTMLDivElement>,
  down?: () => void,
  up?: () => void,
  setEmployeeAnswers?: React.Dispatch<React.SetStateAction<EmployeeAnswers>>,
}

const Logo = styled.div`
  position: fixed;
  top: 56px;
  left: 56px;
  width: 165px;
  height: 60px;
  background-color: #C5C5F8;
  -webkit-mask: url(${logo}) no-repeat center;
  mask: url(${logo}) no-repeat center;
  z-index: 11;
  mask-size: 100%;
`

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D5CB5'
    }
  }
});

const ProgressIndicator = MuiStyled(LinearProgress)(() => ({
  height:10,
}))

const Image = styled.img`
  height: 40px;
`

const ImageContainer = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 64px;
`;

const Illustration = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
  max-width: 40%;
  object-fit: cover;
  object-position: left top;
`;

const FeedbackSection = styled(SurveySection)`
  justify-content: left;
`

const Care = React.forwardRef<HTMLDivElement,CoverProps>((props, ref) => <FeedbackSection {...props} ref={ref}>
  <Logo/>
  <ThemeProvider theme={theme}>
    <ProgressIndicator
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "10"
      }}
      color="primary"
      variant="determinate"
      value={100}
    />
  </ThemeProvider>
  <SectionStack alignItems="left" style={{marginLeft: "200px"}}>
    <TypographyH2 color='#072139'>Maybe it's time to take some self care...</TypographyH2>
    <TypographyBody1 style={{width: "550px", margin: "0"}}>
          Your answers are similar to the ones given by most people who have been diagnosed with some kind of mental disorder.
      Remember that this is not a diagnosis, but if you feel like it ressonates with what you've been feeling lately, remember that you should always prioritize your well being! Don't hesitate to seek professional help if you feel like your mental health is struggling.
      If you want professional help, here are some sites thay may be useful:
    </TypographyBody1>
    <ImageContainer>
    <a href='https://www.betterhelp.com/helpme/'><Image src={firstImg}/></a>
      <a href='https://ifightdepression.com/en/'><Image src={secondImg}/></a>
      <a href='https://www.justanswer.com/'><Image src={thirdImg}/></a>
    </ImageContainer>
    <TypographyH2 color='#072139'>Thank you!</TypographyH2>
    <TypographyBody1 style={{width: "550px", margin: "0"}}>
      Thanks for helping us in our mission of creating safer spaces at work!
    </TypographyBody1>
  </SectionStack>
  <Illustration src={illustration}/>
</FeedbackSection>
)

export default Care;