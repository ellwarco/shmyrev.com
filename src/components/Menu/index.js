import React from 'react';
import EmailMe from '../EmailMe';
import { Wrapper, Nav, NavItem, NavLink } from './style';

const Menu = () =>(
  <Wrapper>
    <Nav>
    <NavItem>
        <a href="https://www.linkedin.com/in/sergey-shmyrev-9bbb0b86/" rel="noopener noreferrer" target="_blank">LinkeDin</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/ellwarco" rel="noopener noreferrer" target="_blank">Github</a>
      </NavItem>
    </Nav>
    <Nav>
    <NavItem>
        <NavLink exact to='/profile'>À propos</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/works'>Portfolio</NavLink>
      </NavItem>
      <NavItem highlight>
      <NavLink exact to='/contact'>Contact</NavLink>
    </NavItem>
    </Nav>
  </Wrapper>)

export default Menu
