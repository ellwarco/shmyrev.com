const { createElement } = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    createElement('link', {
      key: 'fonts',
      href: 'https://fonts.googleapis.com/css?family=Spectral:400,700',
      rel: 'preconnect' 
    })
  ])
}
