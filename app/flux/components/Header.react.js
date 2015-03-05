var React = require('react');

var $ = require('jQuery');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div className="header">
          <div className="logo">
            <a href="/">
              <img className="lazy"
                   data-src="img/logo.png"
                   src="img/empty.png"
              />
            </a>
          </div>
          <nav>
            <a href="#" onClick={this._onAboutClick}>About</a>
            <a href="#" onClick={this._onPortfolioClick}>Portfolio</a>
            <a href="#" onClick={this._onContactClick}>Contact</a>
          </nav>
        </div>
        <div className="clear"></div>
      </header>
    );
  },

  _animateScrollTop: function(elementClass) {
    var top = $(elementClass).offset().top;
    $('body').animate({ scrollTop: top }, 300);
  },

  _onAboutClick: function(event) {
    this._animateScrollTop('.person .image');
    event.preventDefault();
  },

  _onContactClick: function(event) {
    this._animateScrollTop('.contact');
    event.preventDefault();
  },

  _onPortfolioClick: function(event) {
    this._animateScrollTop('.portfolio');
    event.preventDefault();
  }
});

module.exports = Header;
