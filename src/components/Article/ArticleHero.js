import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import Transition from 'react-transition-group/Transition';
import Img from 'gatsby-image';
import Tag from '../TagLabel/TagLabel';
import ExcerptMeta from '../ExcerptMeta/ExcerptMeta';
import { ContentWrapper, GridBase, colors, media } from '../../style/constants';
import { preventWidow } from '../../helpers/helpers';
import SVGWrapper from './svgwrapper.svg';

const ArticleHeroStyled = styled.figure`
    width: 100%; 
    height: 60vh;
    margin: 0 0 2em;
    overflow: hidden;
    position: relative;
    display: flex;
    ${ContentWrapper};
    &::before {
        content: '';
        z-index: 101;
        position: absolute;
        top: 200;
        width: 100%;
        height: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
    }
`;

const ArticleHeader = styled.header`
    margin: auto 0 2em;
    z-index: 201;
    position: relative;
    width: 100%;
    padding: 0 8rem 2rem;
    ${GridBase};
  ${media.md`
    padding: 0 2rem 1rem;
  `}
  ${media.sm`
    padding: 0 1rem;
  `}
    & h1 {
        margin: 0 0 0.25em;
        font-size: 1.3em;
        letter-spacing: -0.5px;
        color: ${colors.support};
        @media (min-width: 768px) {
            font-size: 1.4em;
        }
        @media (min-width: 1024px) {
            font-size: 2.0em;
        }
    }
`;

const articleHeroSmall = css`
    height: auto;
    padding-top: calc(2em + 44px);
    margin-bottom: 0;
    &::before {
        display: none;
    }
    @media(min-width: 768px) {
        padding-top: calc(4em + 60px);
        margin-bottom: 0;
    }
    @media(min-width: 1024px) {
        height: auto;
    }
`;

const CatLink = styled(Link)`
    margin: 0 0 1em;
    font-size: 1.125em;
    font-style: italic;
    display: inline-block;
    text-decoration: none;
    color: ${colors.text};
    &:hover {
        text-decoration: underline;
    }
`;

const imgStyle = css`
    width: 100%;
    height: 100%;
    position: absolute !important;
`;

const ExcerptMetaStyle = css`
    color: ${colors.text};
    a {
        color: ${colors.text};
    }
`;

const TagPos = css`
    float: right;
    background: ${colors.support};
`;

const duration = 300;

const FadeWrapper = styled.div`
    transition: all ${duration}ms ease-in-out;
    opacity: 0;
`;

const transitionStyles = {
    entering: { opacity: 0, transform: 'translateY(50%)' },
    entered: { opacity: 1, transform: 'translateY(0%)' },
};

const Fade = ({ children, in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {state => (
            <FadeWrapper style={{ ...transitionStyles[state] }}>
                {children}
            </FadeWrapper>
        )}
    </Transition>
);

Fade.propTypes = {
    children: PropTypes.array.isRequired,
    in: PropTypes.bool.isRequired,
};

// export default class ArticleHero extends Component {
const ArticleHero = (props) => {
    const { frontmatter, fadeIn } = props;
    const {
        title, category, tags, date, published,
    } = frontmatter;
    return (
        <ArticleHeroStyled className={frontmatter.cover ? '' : articleHeroSmall}>
            {frontmatter.cover &&
            <Img
                outerWrapperClassName={imgStyle}
                position="absolute"
                className={imgStyle}
                resolutions={frontmatter.cover.childImageSharp.resolutions}
            />
            }
            <ArticleHeader>
                <Fade in={fadeIn} >
                    {!published &&
                    <Tag style={TagPos} tagText="unpublished" />
                    }
                    <CatLink to={`/categories/${category}`}>{category}</CatLink>

                    <h1>{preventWidow(title)}</h1>
                    {(tags || date) &&
                    <ExcerptMeta className={ExcerptMetaStyle} tags={tags} date={date} />
                    }
                </Fade>
            </ArticleHeader>
        </ArticleHeroStyled>
    );
};

export default ArticleHero;

ArticleHero.propTypes = {
    frontmatter: PropTypes.object.isRequired,
};
