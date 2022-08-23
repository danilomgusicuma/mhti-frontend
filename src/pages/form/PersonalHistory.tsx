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

interface PersonalHistoryProps {
  ref?: React.Ref<HTMLDivElement>,
  down?: () => void,
  up?: () => void,
  setEmployeeAnswers: React.Dispatch<React.SetStateAction<EmployeeAnswers>>,
  employeeAnswers: EmployeeAnswers,
}

const PersonalHistory = React.forwardRef<HTMLDivElement, PersonalHistoryProps>((props, ref) => <SurveySection {...props} ref={ref}>
  <SectionStack alignItems="right">
    <Stack alignItems="left">
      <TypographyH2>Personal History</TypographyH2>
      <TypographyBody1 color='#072139' style={{marginTop: 0}}>
        Here, we'll ask some questions about your personal history. None of this information will be used to identify you in any way.
      </TypographyBody1>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, hasFamilyHistory: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.hasFamilyHistory ?? ""}
        label="Do you have a family history of mental illness?"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, hasEmployeeHistory: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.hasEmployeeHistory ?? ""}
        label="Have you had a mental health disorder in the past?"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, hasReceivedTreatment: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.hasReceivedTreatment ?? ""}
        label="Have you ever sought treatment for a mental health issue from a mental health professional?"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
    </Stack>
    <ButtonContainer>
      <PrimaryButton
        variant='contained'
        onClick={props.down}
        disabled={
          props.employeeAnswers.hasReceivedTreatment === undefined ||
          props.employeeAnswers.hasEmployeeHistory === undefined ||
          props.employeeAnswers.hasFamilyHistory === undefined
        }
      >Next</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>
)

export default PersonalHistory;
