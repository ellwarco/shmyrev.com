import styled, { css } from 'react-emotion';
import EmailMe from '../EmailMe';
import Divider from './divider.svg';
import { colors, fonts, media } from '../../style/constants';

export const Wrapper = styled.section`
  max-width: 90%;
  margin: 5rem auto 0;
  ${media.lg`
    max-width: 100%;
  `}
  ${media.sm`
    margin: 3rem auto 0;
  `}
`

export const WorksTitle = styled.h1`
  font-size: 1.6rem;
`;


export const NDAWrapper = styled.footer`
  padding-top: 3rem;
  text-align: center;
  
  h2 {
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: .75rem;
    line-height: 1.4em;
  }
`;

export const StyledDivider = styled(Divider)`
  margin-bottom: 3rem;
`;

export const StyledEmailMe = styled(EmailMe)`
  color: ${colors.yellow500};
  font-family: ${fonts.mono};
  font-size: .9rem;
  border-bottom: 1px dotted ${colors.yellow500};
  padding: 0 0 .1rem;
  display: inline-block;
  
  &:hover {
    color: ${colors.yellow500};
  }
`;
