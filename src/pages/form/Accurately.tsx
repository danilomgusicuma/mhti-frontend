import { Stack } from '@mui/system';
import React from 'react';
import { SurveySection } from '../../components/Section';
import { TypographyBody1, TypographyBold1 } from '../../components/Typography';
import PrimaryButton from '../../components/PrimaryButton';
import SectionStack from '../../components/SectionStack';
import ButtonContainer from '../../components/ButtonContainer';

interface AccuratelyProps {
  ref?: React.Ref<HTMLDivElement>,
  down?: () => void,
  up?: () => void,
}

const Accurately = React.forwardRef<HTMLDivElement,AccuratelyProps>((props, ref) => <SurveySection {...props} ref={ref}>
  <SectionStack alignItems="right">
    <Stack alignItems="left">
      <TypographyBold1 style={{margin: 0}}>
        Please answer these questions as accurately as possible.
      </TypographyBold1>
      <TypographyBody1 color='#072139' style={{marginTop: 0}}>
        The survey is divided in four different sections: demographic data, personal history, company/organization data and diagnosis.
      </TypographyBody1>
      <TypographyBody1>
        At the end of the survey, you'll receive information about how your answers compare to the 
        ones of individuals who were diagnosed with some kind of mental disorder.
        <TypographyBold1>
          It is important to emphasize that this information does not constitute a diagnosis and
           should not be considered equivalent to that given by a professional. 
        </TypographyBold1>.
      </TypographyBody1>
      <TypographyBody1>
        Your data will be used to train our model and enable us to keep providing accurate information, 
        and to help your employer to understand how well your company/organization is performing in regards to mental health well-being; but
        <TypographyBold1>
        it won't be used to identify yourself in any way
        </TypographyBold1>.
      </TypographyBody1>
      <TypographyBody1>
        It should take about 4 minutes to complete. Thank you for your time!
      </TypographyBody1>
    </Stack>
    <ButtonContainer>
      <PrimaryButton variant='contained' onClick={props.down}>Continue</PrimaryButton>
    </ButtonContainer>
  </SectionStack>
</SurveySection>
)

export default Accurately;