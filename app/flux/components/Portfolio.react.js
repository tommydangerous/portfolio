var React = require('react');

var PortfolioItem = require('./PortfolioItem.react');

var PortfolioStore = require('../stores/PortfolioStore');

var Portfolio = React.createClass({
  getInitialState: function() {
    return {
      items: PortfolioStore.getAll()
    }
  },

  render: function() {
    var items    = this.state.items;
    var elements = [];
    for (var key in items) {
      elements.push(
        <PortfolioItem key={key} item={items[key]} />
      );
    }

    return (
      <section className="portfolio">
        <div className="items">
          {elements}
        </div>
        <div className="clear"></div>
      </section>
    );
  }
});

module.exports = Portfolio;
