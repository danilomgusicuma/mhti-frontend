import "@fontsource/croissant-one";
import "@fontsource/poppins";
import styled, { css } from "styled-components";

interface TypographyProps {
  color?: string;
}

export const TypographyH2 = styled.h2<TypographyProps>`
  font-family: 'Croissant One';
  letter-spacing: -0.08em;
  font-weight: 400;
  font-size: 1.375em;
  line-height: 1.5em;
  ${({ color }) => color && css`
    color: ${color};
  `}
`;

export const TypographyH3 = styled.h3`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 1.5em;
`;

export const TypographySubtitle1 = styled.p<TypographyProps>`
  font-family: 'Poppins';
  letter-spacing: 0.00938em;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.5em;
  ${({ color }) => color && css`
    color: ${color};
  `}
`;

export const TypographySubtitle2 = styled.p<TypographyProps>`
  font-family: 'Poppins';
  letter-spacing: 0.00714em;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.125em;
  ${({ color }) => color && css`
    color: ${color};
  `}
`;

export const TypographyBody1 = styled.p<TypographyProps>`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 1em;
  ${({ color }) => color && css`
    color: ${color};
  `}
`;

export const TypographyBold1 = styled(TypographyBody1)`
  font-weight: 600;
  display: inline;
`

export const TypographyCaption = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 0.75em;
  line-height: 1.5;
  color: rgba(7, 33, 57, 0.38);
`;

export const TypographyButton = styled.p`
  font-family: 'Poppins';
  letter-spacing: 0.06em;
  font-weight: 600;
  font-size: 0.75em;
  line-height: 1.25;
  text-transform: uppercase;
`;
