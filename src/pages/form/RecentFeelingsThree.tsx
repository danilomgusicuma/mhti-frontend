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

const RecentFeelingsThree = React.forwardRef<HTMLDivElement, PersonalHistoryProps>((props, ref) => <SurveySection {...props} ref={ref}>
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
              prev => ({...prev, cantStopWorrying: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.cantStopWorrying ?? ""}
        label="Not being able to stop or control worrying"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, worryingToMuch: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.worryingToMuch ?? ""}
        label="Worrying too much about different things"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, troubleRelaxing: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.troubleRelaxing ?? ""}
        label="Trouble relaxing"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, easilyAnnoyed: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.easilyAnnoyed ?? ""}
        label="Becoming easily annoyed or irritable"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, feelingAfraid: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.feelingAfraid ?? ""}
        label="Feeling afraid, as if something awful might happen"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
    </Stack>
    <ButtonContainer>
      <PrimaryButton variant='contained' onClick={props.down} disabled={
        props.employeeAnswers.feelingAfraid === undefined ||
        props.employeeAnswers.easilyAnnoyed === undefined ||
        props.employeeAnswers.troubleRelaxing === undefined ||
        props.employeeAnswers.worryingToMuch === undefined ||
        props.employeeAnswers.cantStopWorrying === undefined
      }>Next</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>
)

export default RecentFeelingsThree;
