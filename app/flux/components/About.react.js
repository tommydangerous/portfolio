var React = require('react');

var aboutText =
  'I love solving problems by building mobile and web apps. ' +
  'When I am not passionately coding, ' +
  'I enjoy watching movies, working out, and investing.';

var About = React.createClass({
  getInitialState: function() {
    return {
      backgroundImageStyle: {
        backgroundImage: 'url(img/background.jpg)'
      },
      emptyImage:  'img/empty.png',
      personImage: 'img/person.jpg',
      personName:  'Tommy Dang'
    }
  },

  render: function() {
    return (
      <section className="about">
        <div className="background"
             style={this.state.backgroundImageStyle}>
          <div className="gradient"></div>
          <div className="hello">
            <h1>hello, world</h1>
          </div>
        </div>
        <div className="person">
          <div className="person-body">
            <div className="image">
              <img className="lazy"
                   data-src={this.state.personImage}
                   src={this.state.emptyImage}
              />
            </div>
            <div className="name">
              <h1>{this.state.personName}</h1>
              <p>Entrepreneur / Designer / Developer</p>
            </div>
            <div className="about-text">
              <p>{aboutText}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = About;
