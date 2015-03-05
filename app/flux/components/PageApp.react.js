var React = require('react');

var About = require('./About.react');

var PageApp = React.createClass({
  render: function() {
    return (
      <About />
    );
  }
});

module.exports = PageApp;
