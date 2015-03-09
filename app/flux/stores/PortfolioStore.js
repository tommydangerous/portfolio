var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatcher/AppDispatcher');

var PortfolioConstants = require('../constants/PortfolioConstants');

var CHANGE_EVENT = 'change';

var _items = [];

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

_items['onmyblock'] = {
  appStoreUrl: 'https://itunes.apple.com/us/app/onmyblock/id737199914?mt=8',
  description: 'Find, rent, and list the best-off campus housing through ' +
    'our online student marketplace.',
  count:    0,
  id:       'onmyblock',
  imageUrl: 'img/onmyblock.png',
  name:     'OnMyBlock',
  subtitle: 'Ruby on Rails / iOS',
  websiteUrl: 'onmyblock.com',
};
_items['dunzo'] = {
  appStoreUrl: 'https://itunes.apple.com/us/app/dunzo/id701772884?mt=8',
  description: 'Open the app and immediately begin writing down notes, ' +
    'thoughts, and reminders.',
  count:    0,
  id:       'dunzo',
  imageUrl: 'img/dunzo.png',
  name:     'Dunzo',
  subtitle: 'iOS',
  websiteUrl: null,
};
_items['spadetree'] = {
  appStoreUrl: 'https://itunes.apple.com/us/app/spadetree/id686320991?mt=8',
  description: 'Find or become a tutor for kids K-12, teaching skills ' +
    'that are not typically taught in school.',
  count:    0,
  id:       'spadetree',
  imageUrl: 'img/spadetree.png',
  name:     'SpadeTree',
  subtitle: 'Python / Django / iOS',
  websiteUrl: 'spadetree.com',
};
_items['bite'] = {
  appStoreUrl: 'https://itunes.apple.com/us/app/bite-app/id661010278?mt=8',
  description: 'Know where and when your friends are eating and ' +
    'share with them your plans.',
  count:    0,
  id:       'bite',
  imageUrl: 'img/bite.png',
  name:     'Bite',
  subtitle: 'Ruby on Rails / iOS',
  websiteUrl: 'abiteapp.com',
};
_items['skimreads'] = {
  appStoreUrl: null,
  description: 'Save snippets of content from the web and ' +
    'discover what other people are reading.',
  count:    0,
  id:       'skimreads',
  imageUrl: 'img/skimreads.png',
  name:     'Skimreads',
  subtitle: 'Python / Django',
  websiteUrl: 'skimreads.com',
};
_items['flashingdeals'] = {
  appStoreUrl: null,
  description: 'Curated daily deals using an algorithm that finds ' +
    'the most popular deals around the web.',
  count:    0,
  id:       'flashingdeals',
  imageUrl: 'img/flashingdeals.png',
  name:     'FlashingDeals',
  subtitle: 'Ruby on Rails',
  websiteUrl: 'flashingdeals.com',
};
