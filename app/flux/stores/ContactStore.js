var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _items = [
  {
    href:     'https://twitter.com/TommyDANGerouss',
    imageUrl: 'img/twitter.png'
  },
  {
    href:     'https://www.linkedin.com/profile/view?id=182483014',
    imageUrl: 'img/linkedin.png'
  },
  {
    href:     'https://github.com/tommydangerous',
    imageUrl: 'img/github.png'
  },
  {
    href:     'mailto:quantumventuress@gmail.com',
    imageUrl: 'img/email.png'
  }
];

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
