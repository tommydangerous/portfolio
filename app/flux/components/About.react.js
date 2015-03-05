var React = require('react');

var aboutText =
  'I solve problems by building mobile and web applications. ' +

  'When I am not passionately coding, ' +
  'I enjoy watching movies, working out, and investing. ' +

  'My wife is the most important person in my life. ' +

  'I care very deeply for my friends and family.'

var About = React.createClass({
  getInitialState: function() {
    return {
      backgroundImageStyle: {
        backgroundImage: 'url(img/background.jpg)'
      },
      emptyImage:  'img/empty.png',
      personImage: 'img/person.png',
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
