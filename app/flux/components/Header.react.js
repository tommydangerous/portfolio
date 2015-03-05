var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div className="header">
          <div className="logo">
            <img className="lazy" data-src="img/logo.png" src="img/empty.png"/>
          </div>
        </div>
        <div className="clear"></div>
      </header>
    );
  }
});

module.exports = Header;
