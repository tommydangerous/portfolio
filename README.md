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
To customize all the text, images, items, etc edit the `app/Data.js` file.
