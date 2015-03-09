var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var Data = require('../../Data');

var CHANGE_EVENT = 'change';

var _items = Data.contact.items;

var ContactStore = assign({}, EventEmitter.prototype, {
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

module.exports = ContactStore;
