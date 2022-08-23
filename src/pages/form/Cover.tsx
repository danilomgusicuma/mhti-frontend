import React from 'react';
import { SurveySection } from '../../components/Section';
import { TypographyH3 } from '../../components/Typography';
import logo from '../../assets/images/safespace-logo.svg';
import styled from 'styled-components';
import brain from '../../assets/images/brain.png';
import PrimaryButton from '../../components/PrimaryButton';
import SectionStack from '../../components/SectionStack';
import { EmployeeAnswers } from '../../models/models';

interface CoverProps {
  ref?: React.Ref<HTMLDivElement>,
  down?: () => void,
  up?: () => void,
  setEmployeeAnswers?: React.Dispatch<React.SetStateAction<EmployeeAnswers>>,
}

const CoverImage = styled.img`
  width: 290px;
`

const BrainImage = styled(CoverImage)`
  margin-top: 56px;
  margin-bottom: 60px;
`
const Cover = React.forwardRef<HTMLDivElement,CoverProps>((props, ref) => <SurveySection {...props} ref={ref}>
  <SectionStack alignItems="center">
    <CoverImage src={logo}/>
    <TypographyH3 color='#072139'>Artificial Inteligence for Real Minds.</TypographyH3>
    <BrainImage src={brain}/>
    <PrimaryButton variant='contained' onClick={props.down}>Take the survey</PrimaryButton>
  </SectionStack>
</SurveySection>
)

export default Cover;