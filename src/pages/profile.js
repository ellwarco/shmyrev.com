import React, { Fragment } from 'react';
import ProfileIntroSection from '../components/ProfileIntroSection';
import PdfDrawer from '../components/Pdf';
import ProfileList from '../components/ProfileList';
import ProfileListItem from '../components/ProfileListItem';
import EventListItem from '../components/EventListItem';
import Head from '../components/Head';
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


const ListsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  padding: 8rem 0 0;
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 4rem 0 0;
  `}
`

const ClientsList = styled(ProfileList)`
  ul {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-template-rows: repeat(6, 1fr);
    grid-auto-flow: column;
    grid-column-gap: 5rem;
    ${media.sm`
      grid-column-gap: 3rem;
    `}

    ${media.sm`
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
      grid-auto-flow: unset;
      grid-column-gap: 0;
    `}
  }
`

export default ({ data }) => {
  const { clients, events } = data;
  return (
    <ContentWrapper>
      <Head 
        {...META.profile}
        image={META.common.image}
      />  
      <ProfileIntroSection 
        content={() =>
          <Fragment>            
            <p>Un sens de l'écoute et du service renforcé par 8 ans d'expérience à travailler sur des projets variés, une expertise technique en constante progression grâce à une formation perpétuelle. Motivé par le besoin de faire toujours mieux et appuyé par de solides bases acquises lors de mon parcours, je prends plaisir à relever de nouveaux challenges.</p>
            <Title>Disponible dans toute la région Montpelliéraine pour prise de rendez-vous. <br />
            <span>Aussi disponible pour le travail à distance, Internet n’a pas de frontière.</span></Title>
            <PdfDrawer />
          </Fragment>
        }
      />
<ListsSection>
  {events.edges.length > 0 && 
          <ProfileList 
            title='Derniers évènements'
            list={() => events.edges.map(({ event }, i) => (
              <EventListItem 
                key={i}
                {...event}
              />
            ))}
          />}
  {clients.edges.length > 0 && 
          <ClientsList 
            title='Références clients'
            list={() => clients.edges.map(({ client }, i) => (
              <ProfileListItem 
                key={i}
                {...client}
              />
            ))}
          />}
      </ListsSection>
    </ContentWrapper>
  )
}

export const profileQuery = graphql`
  query ProfileQuery {
    clients: allClientsJson {
      edges {
        client: node {
          name
        }
      }
    }
    events: allEventsJson {
      edges {
        event: node {
          year
          position
          company
        }
      }
    }
  }
`
