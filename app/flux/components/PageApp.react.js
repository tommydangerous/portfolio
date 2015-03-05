var React = require('react');

var About     = require('./About.react');
var Contact   = require('./Contact.react');
var Portfolio = require('./Portfolio.react');

var PageApp = React.createClass({
  render: function() {
    return (
      <div>
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
});

module.exports = PageApp;
