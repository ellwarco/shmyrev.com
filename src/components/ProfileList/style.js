import styled from 'react-emotion';
import { colors } from '../../style/constants';

export const ListTitle = styled.h2`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;

  &::after {
    content: '';
    width: 1rem;
    height: 1px;
    background: ${colors.yellow500};
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
  }
`
export const ProfileUl = styled.ul`
 padding: 0 0 0 1rem;
 list-style-type: disc;
`
