var React = require('react');

var PortfolioItem = React.createClass({
  render: function() {
    return (
      <a className="portfolio-item"
         href={this.props.item.href}
         id={this.props.item.id}
         target="_blank">
        <div className="image">
          <img className="lazy"
               data-src={this.props.item.imageUrl}
               src="img/empty.png"
          />
        </div>
        <div className="name">
          <h1>{this.props.item.name}</h1>
          <p>{this.props.item.subtitle}</p>
        </div>
        <div className="description">
          <div className="border"></div>
          <p>{this.props.item.description}</p>
        </div>
      </a>
    );
  }
});

module.exports = PortfolioItem;
