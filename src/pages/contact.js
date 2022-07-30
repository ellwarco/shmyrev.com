import React, { Fragment } from 'react';
import Head from '../components/Head';
import ContactForm from '../components/ContactForm';
import { META } from '../utils/constants';
import { ContentWrapper } from '../style/shared';
import { Flex, Box, Text } from 'grid-emotion';
import styled, { css } from 'react-emotion';
import { colors, media, getOuterSpace } from '../style/constants';

export const Title = styled.h3`
  span {
    color: ${colors.yellow500};
  }
`;

export default () => {
  return (
    <ContentWrapper>
      <Head 
        {...META.profile}
        image={META.common.image}
      />
      <Flex flexWrap='wrap'>
  <Box p={10} width={1}>
  <Title>Contact</Title>    
      <ContactForm/>
  </Box>  
</Flex>
    </ContentWrapper>
  )
}