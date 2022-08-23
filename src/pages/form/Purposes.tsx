import { Stack } from '@mui/system';
import React from 'react';
import { SurveySection } from '../../components/Section';
import { TypographyBody1, TypographyBold1 } from '../../components/Typography';
import PrimaryButton from '../../components/PrimaryButton';
import SectionStack from '../../components/SectionStack';
import ButtonContainer from '../../components/ButtonContainer';
import { EmployeeAnswers } from '../../models/models';

interface PurposesProps {
  ref?: React.Ref<HTMLDivElement>,
  down?: () => void,
  up?: () => void,
  setEmployeeAnswers?: React.Dispatch<React.SetStateAction<EmployeeAnswers>>,
}

const Purposes = React.forwardRef<HTMLDivElement ,PurposesProps>((props, ref) => <SurveySection {...props} ref={ref}>
  <SectionStack alignItems="right">
    <Stack alignItems="left">
      <TypographyBody1 color='#072139' style={{marginTop: 0}}>
        For the purposes of this survey:
      </TypographyBody1>
      <TypographyBody1>
        • A <TypographyBold1>mental health disorder</TypographyBold1> is defined as a mental illness that has been diagnosed by a doctor.
      </TypographyBody1>
      <TypographyBody1>
        • A <TypographyBold1>mental health issue</TypographyBold1> is defined as a potential mental illness, which may or may not have been diagnosed by a doctor.
      </TypographyBody1>
    </Stack>
    <ButtonContainer>
      <PrimaryButton variant='contained' onClick={props.down}>let's get started!</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>
)

export default Purposes;