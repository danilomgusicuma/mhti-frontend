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

const RecentFeelingsTwo = React.forwardRef<HTMLDivElement, PersonalHistoryProps>((props, ref) => <SurveySection {...props} ref={ref}>
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
              prev => ({...prev, feelingBad: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.feelingBad ?? ""}
        label="Feeling bad about yourself - or that you are a failure or have let yourself or your family down"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, troubleConcentrating: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.troubleConcentrating ?? ""}
        label="Trouble concentrating on things, such as reading the newspaper or watching television"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, slowOrFast: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.slowOrFast ?? ""}
        label="Moving or speaking so slowly that other people have noticed or being so restless that you have been moving around a lot more than usual"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, betterOfDead: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.betterOfDead ?? ""}
        label="Thoughts that you would be better off dead, or of hurting yourself"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, nervousAnxious: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.nervousAnxious ?? ""}
        label="Feeling nervous, anxious, or on edge"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
    </Stack>
    <ButtonContainer>
      <PrimaryButton variant='contained' onClick={props.down} disabled={
        props.employeeAnswers.nervousAnxious === undefined ||
        props.employeeAnswers.betterOfDead === undefined ||
        props.employeeAnswers.slowOrFast === undefined ||
        props.employeeAnswers.troubleConcentrating === undefined ||
        props.employeeAnswers.feelingBad === undefined
      }>Next</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>
)

export default RecentFeelingsTwo;
