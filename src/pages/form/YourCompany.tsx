import { Stack } from '@mui/system';
import React from 'react';
import { SurveySection } from '../../components/Section';
import { TypographyBody1, TypographyH2 } from '../../components/Typography';
import PrimaryButton from '../../components/PrimaryButton';
import SectionStack from '../../components/SectionStack';
import ButtonContainer from '../../components/ButtonContainer';
import Select from '../../components/Select';
import { MenuItem } from '@mui/material';
import { EmployeeAnswers } from '../../models/models';

interface PurposesProps {
  ref?: React.Ref<HTMLDivElement>,
  down?: () => void,
  up?: () => void,
  setEmployeeAnswers: React.Dispatch<React.SetStateAction<EmployeeAnswers>>,
  employeeAnswers: EmployeeAnswers,
}

const YourCompany = React.forwardRef<HTMLDivElement,PurposesProps>((props, ref) => <SurveySection {...props} ref={ref}>
  <SectionStack alignItems="right">
    <Stack alignItems="left">
      <TypographyH2>Your Company/Organization</TypographyH2>
      <TypographyBody1 color='#072139' style={{marginTop: 0}}>
        Here, we'll ask some questions about the company/organization you work for. Your individual answers won't be shared.
      </TypographyBody1>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, hasBenefits: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.hasBenefits ?? ""}
        label="Does your employer provide mental health benefits to you as part of healthcare coverage?"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, openToDiscussWorkspace: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.openToDiscussWorkspace ?? ""}
        label="Has your employer ever formally discussed mental health (for example, as part of a wellness campaign or other official communication)?"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, medicalLeave: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.medicalLeave ?? ""}
        label="If a mental health issue prompted you to request a medical leave from work, how easy or difficult would it be to ask for that leave?"
      >
        <MenuItem value="Very easy to ask for a medical leave">Very easy to ask for a medical leave</MenuItem>
        <MenuItem value="Somewhat easy to ask for a medical leave">Somewhat easy to ask for a medical leave</MenuItem>
        <MenuItem value="Neither easy nor difficult to ask for a medical leave">Neither easy nor difficult to ask for a medical leave</MenuItem>
        <MenuItem value="Somewhat difficult to ask for a medical leave">Somewhat difficult to ask for a medical leave</MenuItem>
        <MenuItem value="Difficult to ask for a medical leave">Difficult to ask for a medical leave</MenuItem>
        <MenuItem value="Very difficult to ask for a medical leave">Very difficult to ask for a medical leave</MenuItem>
        <MenuItem value="Don't know how difficult to ask for a medical leave">Don't know how difficult to ask for a medical leave</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, talkToSupervisor: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.talkToSupervisor ?? ""}
        label="Would you feel comfortable discussing a mental health issue with your direct supervisor(s)?"
      >
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
        <MenuItem value="Maybe">Maybe</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, talkToCoworker: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.talkToCoworker ?? ""}
        label="Would you feel comfortable discussing a mental health issue with your coworkers?"
      >
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
        <MenuItem value="Maybe">Maybe</MenuItem>
      </Select>
    </Stack>
    <ButtonContainer>
      <PrimaryButton variant='contained' onClick={props.down} disabled={
        props.employeeAnswers.talkToCoworker === undefined ||
        props.employeeAnswers.talkToSupervisor === undefined ||
        props.employeeAnswers.medicalLeave === undefined ||
        props.employeeAnswers.openToDiscussWorkspace === undefined ||
        props.employeeAnswers.hasBenefits === undefined
      }>Next</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>
)

export default YourCompany;