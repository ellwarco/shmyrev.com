import React from 'react'
import { ListItem } from '../../style/shared'
import { Wrapper, Position, Companies } from './style'

const EventListItem = ({ year, position, company }) =>
  <ListItem>
    <Wrapper>
      <div className="position"><Position>{position}</Position> chez  <Companies>{company}</Companies></div>
      <div className="year">{year}</div>
    </Wrapper>
  </ListItem>

export default EventListItem
