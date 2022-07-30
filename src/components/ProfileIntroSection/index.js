import React from 'react';
import Intro from '../Intro';
import { Wrapper, InfoWrapper, Content, StyledImage } from './style';

const ProfileIntroSection = ({ content }) => 
  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledImage 
      src="/images/profile/sergey-sh-portrait.jpg"
      alt="Sergey Shmyrev - Full-stack UX design specialist"
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/sergey-sh-portrait-square.jpg 1x',
          '/images/profile/sergey-sh-portrait-square-2x.jpg 2x',
          '/images/profile/sergey-sh-portrait-square-3x.jpg 3x'
        ]
      },{
        srcset: [
          '/images/profile/sergey-sh-portrait.jpg 1x',
          '/images/profile/sergey-sh-portrait-2x.jpg 2x',
          '/images/profile/sergey-sh-portrait-3x.jpg 3x'
        ]       
      }]}
    />
  </Wrapper>

export default ProfileIntroSection
