import React, {Component} from 'react';
import ReactRevealText from 'react-reveal-text';
import { Wrapper, Title} from './style';

class Wrappers extends React.Component {

  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    return (


    <ReactRevealText show={this.state.show}>
       Full Stack Webmaster
    </ReactRevealText>

    );
  }
}

const Intro = props => (
  <Wrapper {...props} >
    <h1><Wrappers /></h1>
    <Title>
    <span>Développeur web expérimenté</span> autonome, curieux, rigoureux, j'aime les applications simples, rapides et efficaces.
    </Title>
  </Wrapper>)

export default Intro
