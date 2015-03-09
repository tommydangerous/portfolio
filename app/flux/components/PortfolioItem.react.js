var React = require('react');

var PortfolioItem = React.createClass({
  render: function() {
    var appStoreLink = undefined;
    var divider      = undefined;
    var websiteLink  = undefined;

    var appStoreUrl = this.props.item.appStoreUrl;
    if (appStoreUrl) {
      appStoreLink = <a data-clicked={this.props.item.count}
                        href={appStoreUrl}
                        onClick={this._click}
                        target="_blank">
                        app store
                    </a>
    }
    var websiteUrl = this.props.item.websiteUrl;
    if (websiteUrl) {
      websiteLink = <a data-clicked={this.props.item.count}
                       href={"http://" + websiteUrl}
                       onClick={this._click}
                       target="_blank">
                       {websiteUrl}
                    </a>
    }
    if (appStoreUrl && websiteUrl) {
      divider = ' / ';
    }

    return (
      <div className="portfolio-item" id={this.props.item.id}>
        <div className="image" style={this.props.item.style}>
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
        <div className="links">
          {websiteLink}{divider}{appStoreLink}
        </div>
      </div>
    );
  },

  _click: function() {
    this.props.onClick(this.props.item.id, {
      count: this.props.item.count + 1
    });
  }
});

module.exports = PortfolioItem;
