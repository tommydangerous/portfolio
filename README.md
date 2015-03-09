## Setup
```
$ brew install node    # Install Node and NPM
$ npm install -g bower # Install Bower
$ npm install          # Install Node packages
$ bower install        # Install Bower packages
```

## Development
```
$ npm start      # Compile JS
$ npm run watch  # Compile SCSS
$ node server.js # Start Node server on port 8080
```

## Production
Before deploying, compress assets.
```
$ npm run gulp compress
```

## Customization
Open the `app/Data.js` file to customize all the text, images, items, etc.

Key | Description | Example
--- | ----------- | -------
about | customization for the top section | See below
contact.items | an array of hashes for your contact information | See below
layout | customization for text within the layout | See below
portfolio.items | an array of hashes for your portfolio items | See below

### About
Key | Description | Example
--- | ----------- | -------
backgroundImage | path to background image | img/background.jpg
hello | text over background image | hello, world
image | path to your image | img/person.jpg
name | your name | John Doe
subtitle | your subtitle | Photographer

### Contact Item
Key | Description | Example
--- | ----------- | -------
href | the URL for your contact profile | https://github.com/tommydangerous
imageUrl | path to the contact image | img/github.png
name | name of the contact method | GitHub

### Layout
Key | Description | Example
--- | ----------- | -------
footer.copyright | name that goes in the footer | Quantum Ventures
title | the title of the page in the head | Dangerous

### Portfolio Item
Key | Description | Example
--- | ----------- | -------
appStoreUrl | URL for the app store | https://itunes.apple.com/...
description | description of your work | This app does this and that...
id | lowercase name of your work | dunzo
imageUrl | path to your portfolio's logo | img/dunzo.png
name | name of your work | Dunzo
style.backgroundColor | the background color behind the logo | rgb(40, 40, 40)
subtitle | text that goes underneath the name of the work | Python / iOS
websiteUrl | the URL of the portfolio item | myapp.com (leave out http://)
