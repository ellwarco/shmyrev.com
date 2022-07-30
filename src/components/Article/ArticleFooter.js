import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import { GridBase, ContentLimit, colors } from '../../style/constants';

const FooterStyled = styled.div`
    padding: 0 1em;
    ${GridBase}; 
    @media(min-width: 768px) {
        padding: 0;
    }
`;

const FooterContent = styled.div`
    ${ContentLimit};
    border-top: 1px solid ${colors.support};
    color: ${colors.text};
    padding: 1em 0;

    p {
        font-size: 1.25em;
        line-height: 1.55;
        @media(min-width: 768px) {
            font-size: 1.375em;
        }        
    }

    div {
        max-width: 65ch;
    }

    a {
        color: ${colors.supportLight};
    }
`;
const ArticleFooter = () => (
    <FooterStyled>
        <FooterContent>
            <div>
                <p>
                    Did you enjoy this article or would you like to tell me that I m wrong? <a href="https://twitter.com/ellwarco" target="_blank" rel="noopener noreferrer">Follow me on Twitter</a> or send me an <a href="mailto:sergey@shmyrev.com">e-mail</a>
                </p>
            </div>
        </FooterContent>
    </FooterStyled>
);

export default ArticleFooter;
