var React = require('react');

var About     = require('./About.react');
var Portfolio = require('./Portfolio.react');

var PageApp = React.createClass({
  render: function() {
    return (
      <div>
        <About />
        <Portfolio />
      </div>
    );
  }
});

module.exports = PageApp;
