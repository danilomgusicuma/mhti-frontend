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

const RecentFeelingsOne = React.forwardRef<HTMLDivElement, PersonalHistoryProps>((props, ref) => <SurveySection {...props} ref={ref}>
  <SectionStack alignItems="right">
    <Stack alignItems="left">
      <TypographyH2>Recent feelings</TypographyH2>
      <TypographyBody1 color='#072139' style={{marginTop: 0}}>
        Now, answer how often you've been bothered by the following questions over the last 2 weeks. This information won't be shared.
      </TypographyBody1>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, interestOrPleasure: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.interestOrPleasure ?? ""}
        label="Little interest or pleasure in doing things"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, downDepressedHopeless: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.downDepressedHopeless ?? ""}
        label="Feeling down, depressed, or hopeless"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, troubleFallingAsleep: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.troubleFallingAsleep ?? ""}
        label="Trouble falling or staying asleep, or sleeping too much"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, tiredLittleEnergy: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.tiredLittleEnergy ?? ""}
        label="Feeling tired or having little energy"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, poorAppetiteOvereating: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.poorAppetiteOvereating ?? ""}
        label="Poor appetite or overeating"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
    </Stack>
    <ButtonContainer>
      <PrimaryButton variant='contained' onClick={props.down} disabled={
        props.employeeAnswers.poorAppetiteOvereating === undefined ||
        props.employeeAnswers.tiredLittleEnergy === undefined ||
        props.employeeAnswers.troubleFallingAsleep === undefined ||
        props.employeeAnswers.downDepressedHopeless === undefined ||
        props.employeeAnswers.interestOrPleasure === undefined
      }>Next</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>
)

export default RecentFeelingsOne;
