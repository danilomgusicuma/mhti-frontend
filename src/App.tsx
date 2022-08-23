import { createTheme, LinearProgress, linearProgressClasses, ThemeProvider } from "@mui/material";
import { styled as MuiStyled} from '@mui/material/styles';
import React, { useRef, useState } from "react";
import "./App.css";
import Accurately from "./pages/form/Accurately";
import Anonymous from "./pages/form/Anonymous";
import Cover from "./pages/form/Cover";
import Demographics from "./pages/form/Demographics";
import Diagnosis from "./pages/form/Diagnosis";
import PersonalHistory from "./pages/form/PersonalHistory";
import Purposes from "./pages/form/Purposes";
import YourCompany from "./pages/form/YourCompany";
import { useScrollPercentage } from 'react-scroll-percentage';
import logo from './assets/images/safespace-logo.svg';
import styled from "styled-components";
import RecentFeelingsOne from "./pages/form/RecentFeelingsOne";
import RecentFeelingsTwo from "./pages/form/RecentFeelingsTwo";
import RecentFeelingsThree from "./pages/form/RecentFeelingsThree";
import { EmployeeAnswers } from "./models/models";

const ProgressIndicator = MuiStyled(LinearProgress)(() => ({
  height:10,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}))
const theme = createTheme({
  palette: {
    primary: {
      main: '#4D5CB5'
    }
  }
});

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

function App() {

  const [employeeAnswers, setEmployeeAnswers] = useState<EmployeeAnswers>({
    companyId: undefined,
    age: undefined,
    gender: undefined,
    hasFamilyHistory: undefined,
    hasEmployeeHistory: undefined,
    hasReceivedTreatment: undefined,
    hasBenefits: undefined,
    wasDiagnosed: undefined,
    openToDiscussWorkspace: undefined,
    talkToSupervisor: undefined,
    talkToCoworker: undefined,
    race: undefined,
    medicalLeave: undefined,
    interestOrPleasure: undefined,
    downDepressedHopeless: undefined,
    troubleFallingAsleep:undefined,
    tiredLittleEnergy: undefined,
    poorAppetiteOvereating: undefined,
    feelingBad: undefined,
    troubleConcentrating: undefined,
    slowOrFast: undefined,
    betterOfDead: undefined,
    nervousAnxious: undefined,
    cantStopWorrying: undefined,
    worryingToMuch: undefined,
    troubleRelaxing: undefined,
    easilyAnnoyed: undefined,
    feelingAfraid: undefined
  })

  const [ref, percentage] = useScrollPercentage({
    threshold: 0.09,
  })

  const coverRef = useRef<HTMLDivElement>(null)
  const anonymousRef = useRef<HTMLDivElement>(null)
  const accuratelyRef = useRef<HTMLDivElement>(null)
  const purposesRef = useRef<HTMLDivElement>(null)
  const demographicsRef = useRef<HTMLDivElement>(null)
  const personalHistoryRef = useRef<HTMLDivElement>(null)
  const recentFeelingsOneRef = useRef<HTMLDivElement>(null)
  const recentFeelingsTwoRef = useRef<HTMLDivElement>(null)
  const recentFeelingsThreeRef = useRef<HTMLDivElement>(null)
  const yourCompanyRef = useRef<HTMLDivElement>(null)
  const diagnosisRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
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
          value={percentage*100}
        />
      </ThemeProvider>
      <Cover ref={coverRef} down={() => anonymousRef.current!.scrollIntoView()}/>
      <Anonymous ref={anonymousRef} down={() => accuratelyRef.current!.scrollIntoView()}/>
      <Accurately ref={accuratelyRef} down={() => purposesRef.current!.scrollIntoView()}/>
      <Purposes ref={purposesRef} down={() => demographicsRef.current!.scrollIntoView()}/>
      <Demographics ref={demographicsRef} down={() => personalHistoryRef.current!.scrollIntoView()} setEmployeeAnswers={setEmployeeAnswers} employeeAnswers={employeeAnswers}/>
      <PersonalHistory ref={personalHistoryRef} down={() => recentFeelingsOneRef.current!.scrollIntoView()} setEmployeeAnswers={setEmployeeAnswers} employeeAnswers={employeeAnswers}/>
      <RecentFeelingsOne ref={recentFeelingsOneRef} down={() => recentFeelingsTwoRef.current!.scrollIntoView()} setEmployeeAnswers={setEmployeeAnswers} employeeAnswers={employeeAnswers}/>
      <RecentFeelingsTwo ref={recentFeelingsTwoRef} down={() => recentFeelingsThreeRef.current!.scrollIntoView()} setEmployeeAnswers={setEmployeeAnswers} employeeAnswers={employeeAnswers}/>
      <RecentFeelingsThree ref={recentFeelingsThreeRef} down={() => yourCompanyRef.current!.scrollIntoView()} setEmployeeAnswers={setEmployeeAnswers} employeeAnswers={employeeAnswers}/>
      <YourCompany ref={yourCompanyRef} down={() => diagnosisRef.current!.scrollIntoView()} setEmployeeAnswers={setEmployeeAnswers} employeeAnswers={employeeAnswers}/>
      <Diagnosis ref={diagnosisRef} setEmployeeAnswers={setEmployeeAnswers} employeeAnswers={employeeAnswers}/>
    </div>
  );
}

export default App;
