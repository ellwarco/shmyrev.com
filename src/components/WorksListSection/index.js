import React from 'react';
import Masonry from 'react-masonry-component';
import WorksListItem from '../WorksListItem';
import { Wrapper, WorksTitle, ButtonsWrapper, FilterButton, NDAWrapper, StyledDivider, StyledEmailMe } from './style';

const WorksListSection = ({
  works,
  category, 
  setCategory,
  year, 
  setYear 
}) => (
  <Wrapper>
    <header>
      <WorksTitle>Portfolio</WorksTitle> 
      <ButtonsWrapper>
        <FilterButton active={category === 'last'} onClick={() => setCategory('last')}>Projet récent</FilterButton>
        <FilterButton active={category === 'web'} onClick={() => setCategory('web')}>Website</FilterButton>
        <FilterButton active={category === 'e-commerce'} onClick={() => setCategory('e-commerce')}>E-Commerce</FilterButton>
        <FilterButton active={category === 'fb'} onClick={() => setCategory('fb')}>Facebook APP</FilterButton>
        <FilterButton active={category === 'mailing'} onClick={() => setCategory('mailing')}>E-mailing</FilterButton>
        {category && <FilterButton onClick={() => setCategory(null)}>all</FilterButton>}
      </ButtonsWrapper>
    </header>

    <main>
        <Masonry 
        elementType={'main'}
        >
      {works.map(({ work }, i) => <WorksListItem key={i} work={work} />)}
        </Masonry>
    </main>
    <NDAWrapper>
      <StyledDivider height={6} width={43} />
      <h2>Would you be interested in finding out about my other work?</h2>
      <StyledEmailMe text='Drop me an email' />
    </NDAWrapper>
  </Wrapper>)


export default WorksListSection