import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { ContentWrapper } from '../style/shared';
import PostsList from '../components/PostsList/PostsList';
import SEO from '../components/SEO/SEO';
import config from '../../gatsby-config';
import '../graphql/archive';

// console.log(archiveQuery);

const BlogList = (props) => {
    const { edges } = props.data.allMarkdownRemark;
    return (
        <ContentWrapper>
            <SEO />
            <Helmet>
                <title>{`Blog | ${config.siteMetadata.siteName}`}</title>
                <link rel="canonical" href={`${config.siteMetadata.siteUrl}/profile/`} />
            </Helmet>
            <PostsList edges={edges} />
      </ContentWrapper> 
    );
};

BlogList.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BlogList;

export const query = graphql`
    query PostsArchive {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    ...defaultArchiveQuery
                }
            }
        }
    }
`;
