var React = require('react');

var Footer = require('./flux/components/Footer.react');
var Header = require('./flux/components/Header.react');

var PageApp = require('./flux/components/PageApp.react');

window.jQuery = require('jQuery');
require('./jquery.lazy');

React.render(
  <Footer />,
  document.getElementById('footer-mount')
);

React.render(
  <Header />,
  document.getElementById('header-mount')
);

React.render(
  <PageApp />,
  document.getElementById('page-app')
);

jQuery('img.lazy').Lazy();
