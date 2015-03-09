var React = require('react');

var Data = require('../../Data');

var About = React.createClass({
  getInitialState: function() {
    return {
      backgroundImageStyle: {
        backgroundImage: 'url(' + Data.about.backgroundImage + ')'
      },
      emptyImage:  Data.images.empty,
      personImage: Data.about.image,
      personName:  Data.about.name
    }
  },

  render: function() {
    return (
      <section className="about">
        <div className="background"
             style={this.state.backgroundImageStyle}>
          <div className="gradient"></div>
          <div className="hello">
            <h1>{Data.about.hello}</h1>
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
              <p>{Data.about.subtitle}</p>
            </div>
            <div className="about-text">
              <p>{Data.about.text}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = About;
