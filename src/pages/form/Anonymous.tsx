import { Stack } from '@mui/system';
import React from 'react';
import { SurveySection } from '../../components/Section';
import { TypographyBody1, TypographyBold1 } from '../../components/Typography';
import PrimaryButton from '../../components/PrimaryButton';
import SectionStack from '../../components/SectionStack';
import ButtonContainer from '../../components/ButtonContainer';
import { EmployeeAnswers } from '../../models/models';

interface AnonymousProps {
  ref?: React.Ref<HTMLDivElement>,
  down?: () => void,
  up?: () => void,
  setEmployeeAnswers?: React.Dispatch<React.SetStateAction<EmployeeAnswers>>,
}

const Anonymous = React.forwardRef<HTMLDivElement,AnonymousProps>((props, ref) => <SurveySection {...props} ref={ref}>
  <SectionStack alignItems="right">
    <Stack alignItems="left">
      <TypographyBody1 color='#072139' style={{margin: 0}}>
        By completing this survey, you are helping us understand how your company/organization
        takes care of the mental well-being of their teams! Our mission is help companies in 
        creating safer spaces by generating awareness and breaking the stigma about seeking for 
        mental health professional help. 
      </TypographyBody1>
      <TypographyBody1 style={{margin: 0}}>
        If you have any questions or comments, feel free to contact us at <TypographyBold1 color='#4D5CB5'>www.safespace.com/contact</TypographyBold1>.
      </TypographyBody1>
      <TypographyBold1>
        All responses are anonymous, and no identifying information will be collected or stored. 
      </TypographyBold1>
    </Stack>
    <ButtonContainer>
      <PrimaryButton variant='contained' onClick={props.down}>Continue</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>
)

export default Anonymous;