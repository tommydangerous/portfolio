var React = require('react');

var PortfolioActions = require('../actions/PortfolioActions');
var PortfolioItem    = require('./PortfolioItem.react');
var PortfolioStore   = require('../stores/PortfolioStore');

function getItemState() {
  return {
    items: PortfolioStore.getAll()
  };
}

var Portfolio = React.createClass({
  getInitialState: function() {
    return getItemState();
  },

  componentDidMount: function() {
    PortfolioStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PortfolioStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var items    = this.state.items;
    var elements = [];
    for (var key in items) {
      elements.push(
        <PortfolioItem key={key} item={items[key]} onClick={this._onClick} />
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
  },

  _onChange: function() {
    this.setState(getItemState());
  },

  _onClick: function(id, updates) {
    PortfolioActions.update(id, updates);
  }
});

module.exports = Portfolio;
