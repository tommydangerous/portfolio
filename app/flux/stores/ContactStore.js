var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _items = [];

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

_items['facebook'] = {
  href:     'https://www.facebook.com/tommydangerouss',
  imageUrl: 'img/facebook.png',
  name:     'Facebook'
}
_items['twitter'] = {
  href:     'https://twitter.com/TommyDANGerouss',
  imageUrl: 'img/twitter.png',
  name:     'Twitter'
}
_items['linkedin'] = {
  href:     'https://www.linkedin.com/profile/view?id=182483014',
  imageUrl: 'img/linkedin.png',
  name:     'LinkedIn'
}
_items['github'] = {
  href:     'https://github.com/tommydangerous',
  imageUrl: 'img/github.png',
  name:     'GitHub'
}
_items['angellist'] = {
  href:     'https://angel.co/tommydangerous',
  imageUrl: 'img/angellist.png',
  name:     'AngelList'
}
_items['email'] = {
  href:     'mailto:quantumventuress@gmail.com',
  imageUrl: 'img/email.png',
  name:     'Email'
}
