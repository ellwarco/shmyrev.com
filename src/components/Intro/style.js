import styled, { css } from 'react-emotion';
import { colors, media, getOuterSpace } from '../../style/constants';

export const Wrapper = styled.div`
  font-size: 1.1rem;
  max-width: 32rem;
  line-height: 1.3em;
  ${media.md`
    max-width: 32rem;
  `}
  ${media.sm`
    max-width: 100%;
    font-size: 0.8rem;
  `}
  ${media.xs`
    font-size: 0.7rem;
  `}

  ${props => props.fixed ? css`
      ${getOuterSpace('padding')};
      position: absolute;
      top: 0;
      right: 5rem;
      text-align: right;
      ${media.md`
        text-align: left;
        left: 4rem;
        right: auto;
      `}
    `
    : css`
      text-align: left;
    `
  }
`;
export const Title = styled.H2`
  span {
    color: ${colors.yellow500};
  }
`;