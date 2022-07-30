import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { GridBase, media,colors } from '../../style/constants';

export const ContentLimit = css`
  max-width: 90%;
  margin: 5rem auto 0;
  ${media.lg`
  max-width: 100%;
  `}
  ${media.sm`
  margin: 3rem auto 0;
  `}
`;

const ArticleContentStyled = styled.div`
    max-width: 68rem;
    width: calc(100% - 9.25rem * 2);
    margin: 10rem auto 5rem;
    ${media.lg`
        margin: 4rem auto 3rem;
        width: calc(100% - 8rem * 2);
    `}

    ${media.md`
        width: 100%;
        margin: 4rem auto 0;
        padding: 0 1.5rem 6rem;
    `}

    ${media.sm`
        margin: 2rem auto 0;
        padding: 0 1.2rem 6rem;
    `}
`;

const fullMedia = css`
    position: relative;
    width: 100vw;
    left: calc(-50vw + 50%);
    margin: 2rem 0;
    @media(min-width: 768px) {
        padding: 0 2rem;
        margin: 4rem 0;
    }
    @media(min-width: 1024px) {
        left: -${((100 / 12) * 2)}vw;
    }
    @media(min-width: 1200px) {
        width: calc(${100 - ((100 / 12) * 2)}vw - 2rem);
        left: auto;
        padding: 0;
    }
    @media(min-width: 1280px) {
        width: calc(${100 - ((100 / 12) * 3)}vw - 2rem);
    }
`;

const ArticleEntryContent = styled.div`
    color: ${colors.text};
    ${ContentLimit};
    margin: 0 auto;

    @media(min-width: 768px) {
        margin: 0;
        width: 100%;
    }

    a {
        color: ${colors.supportLight};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    > div > p {
        &:first-of-type {
            &:first-letter {
                float: left;
                margin: 0.07em 0.23em 0 0;
                text-transform:uppercase;
                font-style: normal;
                font-size: 3.2em;
                line-height: 0.7;
                color: ${colors.support};
            }
        }
    }
    p {
        font-size: 1.25em;
        line-height: 1.55;
        margin: 0 0 2em;
        @media(min-width: 768px) {  
            font-size: 1.375em;
        }

        > code {
            background: ${colors.darkLight}
        }
    }
    ul, ol {
        font-size: 1.25em;
        line-height: 1.55;
        margin: 0 0 2em;
        @media(min-width: 768px) {  
            font-size: 1.375em;
        }

        li {
            margin: 0.2em 0;

            > p {
                font-size: 1em;
                margin: 0;
            }
        }
    }
    & .gatsby-highlight {
        ${fullMedia};
        code, kbd, samp {
            font-size: 1.25em;
        }
    }
    .gatsby-resp-image-wrapper {
        ${fullMedia};
    }
    .gatsby-iframe-wrapper {
        ${fullMedia};
        padding: 0 0 75% 0;

        @media(min-width: 768px) {
            padding: 0 2rem 100% 2rem;
        }

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            @media(min-width: 768px) {
                width: calc(100% - 4rem);
                left: 2rem;
            }

            @media(min-width: 1200px) {
                width: 100%;
                left: 0;
            }
        }
    }

    .caption {
        position: relative;
        margin-bottom: 4em;

        @media(min-width: 768px) {
            margin-bottom: 5em;
        }

        @media(min-width: 1200px) {
            margin-bottom: 0em;
        }

        .caption__text {         
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateY(100%);
            padding: 0.5em 0 0;
            margin: 0;
            font-size: 1rem;
            font-style: italic;            
            color: ${colors.meta};

            @media(min-width: 768px) {
                font-size: 1.125rem;
            }

            @media(min-width: 1200px) {
                position: absolute;
                top: 0;
                bottom: auto;
                padding: 1rem;
                width: calc(${(100 / 12) * 2}vw - 1rem);
                transform: translateY(0) translateX(-100%);
                border-left: 1px solid ${colors.support};
                text-align: right;
            }
        }
    }
    & h1,h2,h3,h4,h5,h6 {
        font-weight: 700;
        color: ${colors.support};
        line-height: 1.55;
    }
    h2 {
        font-size: 1.7em;
        border-bottom: 1px solid ${colors.support};
    }
    h3,h4,h5,h6  {
        font-size: 1.35em;
        margin-bottom: 0.25em;
    }
`;

const ArticleContent = (props) => {
    const { html } = props;
    return (
        <ArticleContentStyled>
            <ArticleEntryContent>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </ArticleEntryContent>
        </ArticleContentStyled>
    );
};

export default ArticleContent;
