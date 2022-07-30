import { css } from 'react-emotion';

export const colors = {
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray600: '#757575',
  gray800: '#424242',
  gray900: '#212121',
  blue_gray50: '#ECEFF1',
  blue_gray100: '#CFD8DC',
  blue_gray200: '#B0BEC5',
  blue_gray300: '#90A4AE',
  blue_gray400: '#78909C',
  blue_gray500: '#607D8B',
  blue_gray600: '#546E7A',
  blue_gray700: '#455A64',
  blue_gray800: '#37474F',
  blue_gray900: '#263238',
  pink50: '#FCE4EC',
  pink100: '#F8BBD0',
  pink200: '#F48FB1',
  pink300: '#F06292',
  pink400: '#EC407A',
  pink500: '#E91E63',
  pink600: '#D81B60',
  pink700: '#C2185B',
  pink800: '#AD1457',
  pink900: '#880E4F',
  pinkA100: '#FF80AB',
  pinkA200: '#FF4081',
  pinkA400: '#F50057',
  pinkA700: '#C51162',
  brilliant_amber: '#e1c564',
  brilliant_gamboge: '#d5a149',
  strong_amber: '#d1a41a',
  brilliant_pistachio: '#e9a23b',
  very_light_amber: '#ffd662',
  blue900: '#1e2733',
  gray500: '#9ea2a7',
  gray700: '#656a73',
  yellow500: '#d5a149',
  yellow700: '#2c3e50',
  dark: '#1e2733',
  darkLight: '#2c3e50',
  support: '#d5497d',
  supportDark: '#49d5a1',
  supportLight: '#d5a149',
  text: '#b0bec5',
  logo: '#b0bec5',
  meta: '#656a73',
};

export const fonts = {
  sansSerif: '\'Spectral\', serif',
  headings: '\'Special\', serif',
  text: '\'Special\', -serif',
  mono: '\'Spectral\', serif'
};

export const spaces = {
  p500: '3rem',
  p400: '3rem',
  p300: '2rem',
  p200: '2rem',
  p100: '1rem',
  p50: '.5rem',
  p25: '.25rem'
};
export const spacesglobal = {
  p500: '2.25rem',
  p400: '2rem',
  p300: '1.75rem',
  p200: '1.25rem',
  p100: '.5rem',
  p50: '.25rem',
  p25: '.15rem'
};

export const mq = {
  xs: '22em',
  sm: '40em',
  md: '54em',
  lg: '78em',
  xl: '125em'
};

export const media = {
  xs: (...a) => css`
    @media (max-width: ${mq.xs}) {
      ${css(...a)}
    }
  `,
  sm: (...a) => css`
    @media (max-width: ${mq.sm}) {
      ${css(...a)}
    }
  `,
  md: (...a) => css`
    @media (max-width: ${mq.md}) {
      ${css(...a)}
    }
  `,
  lg: (...a) => css`
    @media (max-width: ${mq.lg}) {
      ${css(...a)}
    }
  `,
  xl: (...a) => css`
    @media (max-width: ${mq.xl}) {
      ${css(...a)}
    }
  `,
  hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `
};

const rule = (d, v) => `${d}: ${v};` ;

export const getOuterSpace = p =>
  css`
    ${rule(p, spaces.p500)}
    ${media.lg`
      ${rule(p, spaces.p300)}
    `}
    ${media.md`
      ${rule(p, spaces.p300)}
    `}
    ${media.sm`
      ${rule(p, spaces.p200)}
    `}
  `;
  
  export const getOuterSpaceGlobal = p =>
  css`
    ${rule(p, spacesglobal.p500)}
    ${media.lg`
      ${rule(p, spacesglobal.p300)}
    `}
    ${media.md`
      ${rule(p, spacesglobal.p300)}
    `}
    ${media.sm`
      ${rule(p, spacesglobal.p200)}
    `}
  `;
