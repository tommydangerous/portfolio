var React = require('react');

var PortfolioItem = React.createClass({
  render: function() {
    return (
      <a className="portfolio-item"
         data-clicked={this.props.item.count}
         href={this.props.item.href}
         id={this.props.item.id}
         onClick={this._click}
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
  },

  _click: function() {
    this.props.onClick(this.props.item.id, {
      count: this.props.item.count + 1
    });
  }
});

module.exports = PortfolioItem;
