import React, { Component } from 'react';

import { FlipCard } from 'react-flop-card';


export default class FlipCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flippedKey: null
    };
    this.cards = Array.apply(null, {length: 32}).map((val, ind) => ({
      key: String(ind),
      style: {
        front: this.getFrontStyle(ind),
        back: backStyle,
        wrapper: wrapperStyle
      },
      frontChild: (<noscript/>),
      backChild: (<p style={ letterStyle }>{ randomLetter() }</p>),
      onMouseOver: () => { this.setState({ flippedKey: String(ind) }); },
      onMouseOut: () => { this.setState({ flippedKey: null }); }
    }));
  }

  getFrontStyle(ind) {
    const y = (ind - ind % 8) / 8 * -104;
    const x = ind % 8 * -104 -200;
    const backgroundStyle = `url("images/sergey-image.jpg") ${x}px ${y}px/auto`;
    return {
      background: backgroundStyle,
      borderRadius: '10px'
    };
  }

  render() {
    return (
      <div style={ containerStyle }>
        { this.cards.map(({
          key, frontChild, backChild, onMouseOver, onMouseOut, style
        }) => (

          <FlipCard
            key={ key }
            flipped={ this.state.flippedKey === key }
            onMouseOut={ onMouseOut } onMouseOver={ onMouseOver }
            frontChild={ frontChild } backChild={ backChild }
            width={ 100 } height={ 100 } style={ style }/>

        )) }
      </div>
    );
  }
}

const backStyle = {
  backgroundColor: '#607D8B',
  borderRadius: '10px'
};

const letterStyle = {
  color: '#2c3e50',
  fontSize: '40px',
  margin: '28px 0',
  textAlign: 'center',
  fontFamily: 'sans-serif'
};

const containerStyle = {
  fontSize: 0,
  width: 'auto',
  margin: '0 auto'
};

const wrapperStyle = {
  display: 'inline-block',
  margin: '2px'
};

function randomLetter() {
  const possible = 'SERGEYSHMYREVDEVELOPPEMENTWEB';
  return possible.charAt(
    Math.floor(Math.random() * possible.length)
  );
}