import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
import styled, { css } from 'react-emotion';
import { string, arrayOf, shape } from 'prop-types';

export const responsive = css`
    position: relative;
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;
    > picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
`;

const LazyLoadImage = ({ src, alt, sources, className }) => {
  const renderSource = ({ media, srcset }, i) => (
    media 
      ? <source key={i} media={`(${media})`} srcSet={srcset.join(', ')} />
      : <source key={i} srcSet={srcset.join(', ')} />
  )
    
  return (
    <picture className={className}>
      {sources && sources.map(renderSource)}
      <img src={src} alt={alt} />
    </picture>
  )
}

LazyLoadImage.propTypes = {
  src: string.isRequired,
  alt: string,
  sources: arrayOf(shape({
    media: string,
    srcset: arrayOf(string).isRequired
  })),
  className: string
}

LazyLoadImage.defaultProps = {
  alt: '',
  sources: { media: null },
  className: null
}

export default LazyLoadImage
