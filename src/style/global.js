import { injectGlobal } from 'react-emotion';
import { colors, fonts, media } from './constants'; 
injectGlobal`
@font-face {
  font-family: stack-mono;
  src: local(".SFNSText-Light");
}

@font-face {
  font-family: stack-sans;
  src: local(".SFNSText-Light");
}

  * {
  box-sizing: border-box;
  line-height: 1.4em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}

  html, body {
    height: 100%;
    font-size: 16px;
    ${media.xl`
      font-size: 18px;
    `}
  }

  body {
    background: ${colors.blue900};
    color: ${colors.gray700};
    font-family: ${fonts.sansSerif};
    backface-visibility: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.headings};
    font-weight: 500;
    color: ${colors.text};
  }

  a {
    color: ${colors.support};
    text-decoration: none;
    transition: color ease-in .2s;
    
    &:hover {
      color: #fff;
    }
  }

  ::selection {
    color: ${colors.yellow500};
    background: transparent;
  }
`;
