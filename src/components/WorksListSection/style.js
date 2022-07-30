import styled, { css } from 'react-emotion';
import Image from '../Image';
import EmailMe from '../EmailMe';
import Divider from './divider.svg';
import { colors, fonts, media } from '../../style/constants';

export const Wrapper = styled.section`
  max-width: 100%;
  margin: 5rem auto 0;
  ${media.lg`
    max-width: 100%;
  `}
  ${media.sm`
    margin: 3rem auto 0;
  `}
`;
export const StyledImage = styled(Image)`
  display: block;
  position: relative;
  background: #242e3a;
  
  &::before {
    content: '';
    padding-top: 74%;
    display: block;
    ${media.sm`
      padding-top: 100%;
    `}
  }

  img {
    position: absolute;
    display: block;
    margin: auto;
    width: 100%;
    height: 100%;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    object-fit: cover;
  }
`;
export const WorksTitle = styled.h1`
  font-size: 1.6rem;
`;

export const ButtonsWrapper = styled.div`
  padding: .75rem 0 1.5rem;
`;

export const FilterButton = styled.button`
  border: 0;
  background: 0;
  padding: 0;
  margin: 0;
  appearance: none;
  font-size: .9rem;
  font-family: ${fonts.mono};
  cursor: pointer;

  &:not(:last-child)::after {
    content: '-';
    display: inline-block;
    margin: 0 .5rem;
    color: ${colors.gray500};
  }

  &:focus {
    outline: 0;
  }

  ${props => props.active 
    ? css`
      color: ${colors.yellow500};
    `
    : css`
      color: ${colors.gray500};
    `}
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
