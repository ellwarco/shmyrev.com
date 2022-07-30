import React from 'react';
import { Wrapper, Item } from './style';
import HeartIcon from '../Icons/HeartIcon';
import PhoneIcon from '../Icons/PhoneIcon';

const currentYear = new Date().getFullYear();

const Footer = () =>(
  <Wrapper>
    <Item position='left'>
     Made with {' '}<HeartIcon />{' '} {' '} © {currentYear} 
    </Item>
    <Item position='right'>
    <span><PhoneIcon /> (+33) 632 592 589</span>
    </Item>
  </Wrapper>)

export default Footer
