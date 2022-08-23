import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { SurveySection } from '../../components/Section';
import { TypographyBody1, TypographyH2 } from '../../components/Typography';
import PrimaryButton from '../../components/PrimaryButton';
import SectionStack from '../../components/SectionStack';
import ButtonContainer from '../../components/ButtonContainer';
import Select from '../../components/Select';
import { CircularProgress, MenuItem } from '@mui/material';
import { EmployeeAnswers } from '../../models/models';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface DiagnosisProps {
  ref?: React.Ref<HTMLDivElement>,
  down?: () => void,
  up?: () => void,
  setEmployeeAnswers: React.Dispatch<React.SetStateAction<EmployeeAnswers>>,
  employeeAnswers: EmployeeAnswers,
}



const Diagnosis = React.forwardRef<HTMLDivElement, DiagnosisProps>((props, ref) => {
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const request = async (input: EmployeeAnswers) => {
    setLoading(true)
    const answer = {
      companyId: 1,
      age: input.age,
      gender: input.gender,
      hasFamilyHistory: input.hasFamilyHistory,
      hasEmployeeHistory: input.hasEmployeeHistory,
      hasReceivedTreatment: input.hasReceivedTreatment,
      hasBenefits: input.hasBenefits,
      wasDiagnosed: input.wasDiagnosed,
      openToDiscussWorkspace: input.openToDiscussWorkspace,
      talkToSupervisor: input.talkToSupervisor,
      talkToCoworker: input.talkToCoworker,
      race: input.race,
      medicalLeave: input.medicalLeave
    }
    const {data} = await axios.post('https://mhti-safe-spaces.herokuapp.com/analysis/', answer)
    if (input.wasDiagnosed) {
      navigate("/thanks")
    }
    else if (data.probabilityToHaveMentalDisorder <= 0.25) {
      navigate("/fine")
    }
    else if (data.probabilityToHaveMentalDisorder <= 0.75) {
      navigate("/feeling")
    }
    else {
      navigate("/care")
    }
    setLoading(false)
  }

  return (<SurveySection {...props} ref={ref}>
  <SectionStack alignItems="right">
    <Stack alignItems="left">
      <TypographyH2>Diagnosis</TypographyH2>
      <TypographyBody1 color='#072139' style={{marginTop: 0}}>
        Finally, there's only one question here about if you have ever been diagnosed. Your individual answer won't be shared.
      </TypographyBody1>
      <Select
        onChange={
          (event) => {
            props.setEmployeeAnswers(
              prev => ({...prev, wasDiagnosed: event.target.value} as EmployeeAnswers)
            )
          }
        }
        value={props.employeeAnswers.wasDiagnosed ?? ""}
        label="Have you been diagnosed with a mental health condition by a medical professional?"
      >
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </Select>
    </Stack>
    <ButtonContainer>
      <PrimaryButton variant='contained' onClick={()=>request(props.employeeAnswers)} disabled={loading}>{loading ? <CircularProgress size={14} /> : "Next"}</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>)}
)

export default Diagnosis;