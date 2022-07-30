import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import ToggleMenu from '../../components/ToggleMenu';
import { Wrapper, Header } from './style';
import { colors, media } from '../../style/constants';

class Navigation extends Component {
  constructor() {
    super();
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      this.setState({ open: false });
    }
  }

  render() {
    const { open } = this.state;
    const Shoable = styled.div`
  ${media.md`
    background: ${colors.blue900};
    overflow: hidden;
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    ${open ? css`
        max-height: 200px;
      `
      : css`
        max-height: 0;
      `}
    
    > div {
      padding: 0 3rem 3rem;
    }
  `}

  ${media.sm`
    > div {
      padding: 0 2rem 2rem;
    }
  `}
`;

    return (
      <Wrapper>
        <Header>
          <Logo />
          <ToggleMenu 
            open={open} 
            onClick={this.toggleMenu} 
          />
        </Header>
        <Shoable 
            open={open} >
          <div>
            <Menu />
            <Footer />
          </div>
        </Shoable>
      </Wrapper>      
    )
  }
}

export default Navigation
