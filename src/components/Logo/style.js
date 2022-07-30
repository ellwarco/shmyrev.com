import styled from 'react-emotion';
import { media, getOuterSpace } from '../../style/constants';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 18rem;
  z-index: 201;
  ${getOuterSpace('padding')}
  ${media.md`
    position: static;
    padding: 0;
  `}
  
  > div {
    position: relative;
  }

  a, svg {
    display: block;
  }

  a {
    width: 2.85rem;
    ${media.lg`
      width: 2.45rem;
    `}
  }

  svg {
    width: 100%;
    height: auto;
  }

  .sh {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: rgba(255, 255, 255, .05);
    height: 100%;
    width: 100%;
    border-radius: 100%;
    pointer-events: none;
    opacity: 1;
    will-change: transform;
  }

  a:hover + .sh {
    opacity: 0;
    transform: translate(-50%, -50%) scale(7.5);
    transition: transform 1s cubic-bezier(.45, 0, .1, 1), opacity .8s ease;
  }
`;
