import { Stack } from '@mui/system';
import React from 'react';
import { SurveySection } from '../../components/Section';
import { TypographyBody1, TypographyH2 } from '../../components/Typography';
import PrimaryButton from '../../components/PrimaryButton';
import SectionStack from '../../components/SectionStack';
import ButtonContainer from '../../components/ButtonContainer';
import TextField from '../../components/TextField';
import Select from '../../components/Select';
import { MenuItem } from '@mui/material';
import { EmployeeAnswers } from '../../models/models';

interface DemographicsProps {
  ref?: React.Ref<HTMLDivElement>,
  down?: () => void,
  up?: () => void,
  setEmployeeAnswers: React.Dispatch<React.SetStateAction<EmployeeAnswers>>,
  employeeAnswers: EmployeeAnswers,
}

const Demographics = React.forwardRef<HTMLDivElement, DemographicsProps>((props, ref) => <SurveySection {...props} ref={ref}>
  <SectionStack alignItems="right">
    <Stack alignItems="left">
      <TypographyH2>Demographics</TypographyH2>
      <TypographyBody1 color='#072139' style={{marginTop: 0}}>
        Here, we'll ask some questions about you. None of this information will be shared, and it will just be used to train our model.
      </TypographyBody1>
      <TextField
        label={"What is your age?"}
        type="number"
        style={{marginBottom: "12px"}}
        onChange={(event) => {
          props.setEmployeeAnswers(
            prev => ({ ...prev, age: event.target.value } as unknown as EmployeeAnswers)
          )
        }}
        value={props.employeeAnswers.age ?? ""}
        />
      <Select
        label="What is your gender identity?"
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, gender: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.gender ?? ""}
      >
        <MenuItem value="Cis Female">Cis Female</MenuItem>
        <MenuItem value="Cis Male">Cis Male</MenuItem>
        <MenuItem value="Trans Female">Trans Female</MenuItem>
        <MenuItem value="Trans Male">Trans Male</MenuItem>
        <MenuItem value="Agender">Agender</MenuItem>
        <MenuItem value="Non Binary">Non Binary</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
      <Select
        label="What is your race?"
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, race: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.race ?? ""}
      >
      <MenuItem value="American Indian or Alaska Native">American Indian or Alaska Native</MenuItem>
        <MenuItem value="Asian">Asian</MenuItem>
        <MenuItem value="Black">Black</MenuItem>
        <MenuItem value="Caucasian">Caucasian</MenuItem>
        <MenuItem value="European American">European American</MenuItem>
        <MenuItem value="Hispanic">Hispanic</MenuItem>
        <MenuItem value="White">White</MenuItem>
        <MenuItem value="White Hispanic">White Hispanic</MenuItem>
        <MenuItem value="More than one of the above">More than one of the above</MenuItem>
        <MenuItem value="I prefer not to answer">I prefer not to answer</MenuItem>
      </Select>
    </Stack>
    <ButtonContainer>
      <PrimaryButton variant='contained' onClick={props.down} disabled={
        props.employeeAnswers.race === undefined ||
        props.employeeAnswers.gender === undefined ||
        props.employeeAnswers.age === undefined
      }>Next</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>
)

export default Demographics;