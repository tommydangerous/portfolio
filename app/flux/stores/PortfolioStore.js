var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _items = [
  {
    description: 'Find, rent, and list the best-off campus housing through ' +
      'our online student marketplace.',
    href:     'http://onmyblock.com',
    id:       'onmyblock',
    imageUrl: 'img/onmyblock.png',
    name:     'OnMyBlock',
    subtitle: 'Ruby on Rails / iOS'
  },
  {
    description: 'Open the app and immediately begin writing down notes, ' +
      'thoughts, and reminders.',
    href:     'https://itunes.apple.com/us/app/dunzo/id701772884?mt=8',
    id:       'dunzo',
    imageUrl: 'img/dunzo.png',
    name:     'Dunzo',
    subtitle: 'iOS'
  },
  {
    description: 'Find or become a tutor for kids K-12, teaching skills ' +
      'that are not typically taught in school.',
    href:     'http://spadetree.com',
    id:       'spadetree',
    imageUrl: 'img/spadetree.png',
    name:     'SpadeTree',
    subtitle: 'Python / Django / iOS'
  },
  {
    description: 'Know where your friends are eating and share with them ' +
      'your plans for breakfast, lunch, or dinner.',
    href:     'https://itunes.apple.com/us/app/bite-app/id661010278?mt=8',
    id:       'bite',
    imageUrl: 'img/bite.png',
    name:     'Bite',
    subtitle: 'Ruby on Rails / iOS'
  },
  {
    description: 'Save snippets of content from websites you read and ' +
      'discover what other people are skimming.',
    href:     'http://skimreads.com',
    id:       'skimreads',
    imageUrl: 'img/skimreads.png',
    name:     'Skimreads',
    subtitle: 'Python / Django'
  },
  {
    description: 'Curated daily deals using an algorithm that finds ' +
      'the most popular deals around the web.',
    href:     'http://flashingdeals.com',
    id:       'flashingdeals',
    imageUrl: 'img/flashingdeals.png',
    name:     'FlashingDeals',
    subtitle: 'Ruby on Rails'
  }
];

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

module.exports = PortfolioStore;
