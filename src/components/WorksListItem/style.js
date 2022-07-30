import styled, { css } from 'react-emotion';
import Image from '../Image';
import LazyLoadImage from '../LazyLoadImage';
import { fonts, colors, media } from '../../style/constants';

export const WorkFeatured = styled.article`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, .35);
  transform: translateY(0);
  transition: all .3s cubic-bezier(.45, 0, .1, 1);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: box-shadow, transform;

  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, .35);
  }

  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 0;
    line-height: 0;
  }

  ${media.sm`
    box-shadow: none;
    transform: translateY(0);
    
    &:hover {
      box-shadow: none;
      transform: translateY(0);     
    }
  `}
`;

export const StyledImage = styled(LazyLoadImage)`
  display: block;
  position: relative;
  background: #242e3a;
`;

export const Wrapper = styled.article`
  padding: .2rem 0;
  > header {
    transform: translateX(0);
    transition: transform .5s cubic-bezier(.5, .1, 0, 1.15);
    backface-visibility: hidden;
    will-change: transform;
  }
  &:last-child {
    border-bottom: 0;
  }
  > a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 0;
    line-height: 0;
  }
  ${props => props.hasLink && css`
    ${media.hover`
      &:hover {
        > header {
          transform: translateX(-.75rem);
        }
      }
    `}
  `}
`;

export const WorkTitle = styled.h3`
  padding: .1rem;
  font-size: 0.9rem;
  color: ${colors.gray500};
  font-weight: 300;
`;

export const WorkInfos = styled.div`
  margin-top: .5rem;
  font-family: ${fonts.mono};
  font-size: .9rem;
  color: ${colors.gray500};
`;

export const WorkYear = styled.span`
  color: #fff;
  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 1rem;
    width: 1rem;
    background: ${colors.yellow700};
    margin-right: .2rem;
  }
`;

export const StyledCard = styled.div`
      width: 100%;
      background-color: rgb(41, 55, 66);
      display: block;
      position: relative;
      marginBottom: 4px;
      border-radius: 8px;
      -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, .2), 0 2px 4px rgba(16, 22, 26, .4), 0 8px 24px rgba(16, 22, 26, .4);
      box-shadow: 0 0 0 1px rgba(16, 22, 26, .2), 0 2px 4px rgba(16, 22, 26, .4), 0 8px 24px rgba(16, 22, 26, .4)
      -webkit-transition: -webkit-transform .2s cubic-bezier(.4, 1, .75, .9), -webkit-box-shadow .2s cubic-bezier(.4, 1, .75, .9);
      transition: -webkit-transform .2s cubic-bezier(.4, 1, .75, .9), -webkit-box-shadow .2s cubic-bezier(.4, 1, .75, .9);
      transition: transform .2s cubic-bezier(.4, 1, .75, .9), box-shadow .2s cubic-bezier(.4, 1, .75, .9);
      transition: transform .2s cubic-bezier(.4, 1, .75, .9), box-shadow .2s cubic-bezier(.4, 1, .75, .9), -webkit-transform .2s cubic-bezier(.4, 1, .75, .9), -webkit-box-shadow .2s cubic-bezier(.4, 1, .75, .9);
      > h5, h6 {
        line-height: 19px;
        font-size: 16px
        font-weight: 300;
        margin: 0 0 10px;
        padding: 0
        transform: translateX(0);
        transition: transform .5s cubic-bezier(.5, .1, 0, 1.15);
        backface-visibility: hidden;
        will-change: transform;
      }
      &:hover {
        transform: translateY(-.5rem);
        box-shadow: 0 20px 30px -10px rgba(0, 0, 0, .35);
      }
    
      a {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-size: 0;
        line-height: 0;
      }
    
      ${media.sm`
        box-shadow: none;
        transform: translateY(0);
        
        &:hover {
          box-shadow: none;
          transform: translateY(0);     
        }
      `}
`;

export const StyledCardBody = styled.div`
  padding: 5px 14px;
`;

export const StyledCardHeader = styled.div`
  > picture {
    > img {
      display: block;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
      width: 100%;
      position: relative;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
`;

export const StyledCardFooter = styled.div`
    display: flex;
    alignItems: center;
    padding: 10px 14px;
    marginTop: 0;
`;

export const Browser = css`
  border-radius: 10px;
  `

export const BrowserAddress = css`
  padding: 10px 15px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-bottom-width: 0;
  font-size: 14px;
  line-height: 1.4;
  color: #5b616f;
`

export const BrowserButton = css`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: #dfdfdf;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`

export const BrowserContent = css`
  border-radius: 0 0 10px 10px;
  background: linear-gradient(180deg, #fcfcfc, #fff);
  overflow: hidden;
  position: relative;
  border: 1px solid #eaeaea;
  border-top-width: 0;
`

export const MyLazyImage = styled(LazyLoadImage)`
    background-position: top;
    background-size: cover;
    transition: background-position 3s ease-in-out,
    opacity 0.25s ease-in-out;
`

export const BrowserPortfolio = styled.div`
  text-decoration: none;
  display: block;
  margin-bottom: 20px;

  > img {
		border-bottom: 1px solid currentColor;
	}
`

export const BrowserTitleBar = css`
  background: linear-gradient(244.13deg, #f3f3f3, #f9f9f9);
  border-radius: 10px 10px 0 0;
  padding: 10px 25px;
  border: 1px solid #eaeaea;
  border-bottom-width: 0;
  text-align: left;
`
export const BrowserTitle = css`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  font-weight: 500;
  position: relative;
  top: 1px;
  font-size: 14px;
  line-height: 1.4;
  color: #5b616f;
`

export const WebsiteTechnology = css`
  text-align: center;
  padding: 15px 15px 0;
  color: #30343f;
  display: block;
  font-size: 14px;
  line-height: 1.4;

  > img {
		height: 20px;
    display: inline-block;
    vertical-align: middle;
  }
`
export const WebsiteTechnologyName = css`
    display: inline-block;
    vertical-align: middle;
    margin-left: 6px;
`
