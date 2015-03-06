exports.index = function(req, res) {
  res.render('pages/index', {
    environment: process.env.NODE_ENV,
    title: 'Dangerous'
  });
};
