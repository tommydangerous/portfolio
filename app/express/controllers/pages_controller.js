exports.index = function(req, res) {
  // res.render('pages/index', {
  //   title: 'Dangerous',
  //   environment: process.env.NODE_ENV
  // });
  res.render('pages/test', {
    title: 'Test'
  });
};
