var Data = {
  about: {
    backgroundImage: 'img/background.jpg',
    hello: 'hello, world',
    image: 'img/person.jpg',
    name: 'Tommy Dang',
    subtitle: 'Entrepreneur / Designer / Developer',
    text: 'I love solving problems by building mobile and web applications. ' +
      'When I am not passionately coding, ' +
      'I enjoy watching movies, working out, and investing. ' +
      'My wife is the most important person in my life. ' +
      'I care very deeply for my friends and family.'
  },
  contact: {
    items: []
  },
  images: {
    empty: 'img/empty.png'
  },
  layout: {
    footer: {
      copyright: 'Quantum Ventures'
    },
    title: 'Dangerous'
  },
  portfolio: {
    items: []
  }
};

module.exports = Data;

Data.contact.items['facebook'] = {
  href:     'https://www.facebook.com/tommydangerouss',
  imageUrl: 'img/facebook.png',
  name:     'Facebook'
}
Data.contact.items['twitter'] = {
  href:     'https://twitter.com/TommyDANGerouss',
  imageUrl: 'img/twitter.png',
  name:     'Twitter'
}
Data.contact.items['linkedin'] = {
  href:     'https://www.linkedin.com/profile/view?id=182483014',
  imageUrl: 'img/linkedin.png',
  name:     'LinkedIn'
}
Data.contact.items['github'] = {
  href:     'https://github.com/tommydangerous',
  imageUrl: 'img/github.png',
  name:     'GitHub'
}
Data.contact.items['angellist'] = {
  href:     'https://angel.co/tommydangerous',
  imageUrl: 'img/angellist.png',
  name:     'AngelList'
}
Data.contact.items['email'] = {
  href:     'mailto:quantumventuress@gmail.com',
  imageUrl: 'img/email.png',
  name:     'Email'
}

Data.portfolio.items['onmyblock'] = {
  appStoreUrl: 'https://itunes.apple.com/us/app/onmyblock/id737199914?mt=8',
  description: 'Find, rent, and list the best-off campus housing through ' +
    'our online student marketplace.',
  count:    0,
  id:       'onmyblock',
  imageUrl: 'img/onmyblock.png',
  name:     'OnMyBlock',
  style: {
    backgroundColor: 'rgb(41, 184, 229)'
  },
  subtitle: 'Ruby on Rails / iOS',
  websiteUrl: 'onmyblock.com',
};
Data.portfolio.items['dunzo'] = {
  appStoreUrl: 'https://itunes.apple.com/us/app/dunzo/id701772884?mt=8',
  description: 'Open the app and immediately begin writing down notes, ' +
    'thoughts, and reminders.',
  count:    0,
  id:       'dunzo',
  imageUrl: 'img/dunzo.png',
  name:     'Dunzo',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'iOS',
  websiteUrl: null,
};
Data.portfolio.items['spadetree'] = {
  appStoreUrl: 'https://itunes.apple.com/us/app/spadetree/id686320991?mt=8',
  description: 'Find or become a tutor for kids K-12, teaching skills ' +
    'that are not typically taught in school.',
  count:    0,
  id:       'spadetree',
  imageUrl: 'img/spadetree.png',
  name:     'SpadeTree',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'Python / Django / iOS',
  websiteUrl: 'spadetree.com',
};
Data.portfolio.items['bite'] = {
  appStoreUrl: 'https://itunes.apple.com/us/app/bite-app/id661010278?mt=8',
  description: 'Know where and when your friends are eating and ' +
    'share with them your plans.',
  count:    0,
  id:       'bite',
  imageUrl: 'img/bite.png',
  name:     'Bite',
  style: {
    backgroundColor: 'rgb(207, 4, 4)'
  },
  subtitle: 'Ruby on Rails / iOS',
  websiteUrl: 'abiteapp.com',
};
Data.portfolio.items['skimreads'] = {
  appStoreUrl: null,
  description: 'Save snippets of content from the web and ' +
    'discover what other people are reading.',
  count:    0,
  id:       'skimreads',
  imageUrl: 'img/skimreads.png',
  name:     'Skimreads',
  style: {
    backgroundColor: 'rgb(40, 40, 40)'
  },
  subtitle: 'Python / Django',
  websiteUrl: 'skimreads.com',
};
Data.portfolio.items['flashingdeals'] = {
  appStoreUrl: null,
  description: 'Curated daily deals using an algorithm that finds ' +
    'the most popular deals around the web.',
  count:    0,
  id:       'flashingdeals',
  imageUrl: 'img/flashingdeals.png',
  name:     'FlashingDeals',
  style: {
    backgroundColor: 'rgb(214, 249, 255)'
  },
  subtitle: 'Ruby on Rails',
  websiteUrl: 'flashingdeals.com',
};

