import React from 'react';
import Link from 'gatsby-link';
import Sh from './sh.svg';
import { Wrapper } from './style';

const Logo = () =>(
  <Wrapper>
    <div>
      <Link to='/'><Sh width={200} height={200} /></Link>
      <div className="sh" />
    </div>
  </Wrapper>)

export default Logo
