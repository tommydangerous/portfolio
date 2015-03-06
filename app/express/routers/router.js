var pagesController = require('../controllers/pages_controller');

module.exports = function(app) {
  app.route('/').get(function(req, res) {
    res.send('yo');
  });
  // app.route('/').get(pagesController.index);
  // app.route('/about').get(pagesController.index);
  // app.route('/contact').get(pagesController.index);
  // app.route('/portfolio').get(pagesController.index);
};
