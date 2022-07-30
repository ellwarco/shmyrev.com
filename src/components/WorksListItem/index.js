import React from 'react';
import { Box } from 'grid-emotion';
import { WorkTitle, StyledCard, StyledCardHeader, StyledCardBody, StyledImage, Browser, BrowserAddress, BrowserButton, BrowserContent, MyLazyImage, BrowserPortfolio, BrowserTitleBar, BrowserTitle, WebsiteTechnology, WebsiteTechnologyName } from './style';

const WorksListItem = (props) =>  {
  const { title, year, category, url, image, plateforme } = props.work;

  return (
    <Box p={[ 10, 20 ]} width={[ 1/2, 1/3 ]}>
     <StyledCard>
        <StyledCardHeader>
        <StyledImage 
          alt={title}
          {...image} 
        />
        </StyledCardHeader>
        <StyledCardBody>
        <WorkTitle>{title}</WorkTitle>
        </StyledCardBody>
        {url && <a href={url} target="_blank" rel="noopener noreferrer">More Info</a>}
      </StyledCard>
      </Box>
  )
}
export default WorksListItem