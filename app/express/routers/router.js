var pagesController = require('../controllers/pages_controller');

module.exports = function(app) {
  app.route('/').get(pagesController.index);
};
