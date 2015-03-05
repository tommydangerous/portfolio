var AppDispatcher = require('../dispatcher/AppDispatcher');

var PortfolioConstants = require('../constants/PortfolioConstants');

var PortfolioActions = {
  update: function(id, updates) {
    AppDispatcher.dispatch({
      actionType: PortfolioConstants.PORTFOLIO_UPDATE,
      id: id,
      updates: updates
    });
  }
};

module.exports = PortfolioActions;
