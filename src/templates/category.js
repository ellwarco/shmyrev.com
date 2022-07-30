import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import PostsList from '../components/PostsList/PostsList';
import config from '../../gatsby-config';
import '../graphql/archive';
import { ContentWrapper } from '../style/shared';

const CategoryTemplate = (props) => {
    const { edges } = props.data.allMarkdownRemark;
    const { category } = props.pathContext;
    return (
        <div>
            <ContentWrapper>
            <SEO />
            <Helmet>
                <title>{`Posts in category '${category}' | ${config.siteMetadata.siteName}`}</title>
                <link rel="canonical" href={`${config.siteMetadata.siteUrl}/about/`} />
            </Helmet>
            <PostsList edges={edges} />
            </ContentWrapper>
        </div>
    );
};

CategoryTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pathContext: PropTypes.object.isRequired,
};

export default CategoryTemplate;

export const query = graphql`
    query CategoryArchive($category: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { category: { eq: $category } } }
        ) {
            totalCount
            edges {
                node {
                   ...defaultArchiveQuery
                }
            }
        }
    }
`;
