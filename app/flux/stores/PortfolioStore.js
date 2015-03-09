var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var AppDispatcher      = require('../dispatcher/AppDispatcher');
var Data               = require('../../Data');
var PortfolioConstants = require('../constants/PortfolioConstants');

var CHANGE_EVENT = 'change';

var _items = Data.portfolio.items;

function update(id, updates) {
  _items[id] = assign({}, _items[id], updates);
};

var PortfolioStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _items;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  switch(payload.actionType) {
    case PortfolioConstants.PORTFOLIO_UPDATE:
      update(payload.id, payload.updates);
      PortfolioStore.emitChange();
      break;

    default:

  }
});

module.exports = PortfolioStore;
