exports.homePage = (req, res) => {
    const kev = { name: 'Kevin', age: '100', cool: true }
  // res.send('Hey! It works!');
  // res.json(kev);
  // res.send(req.query.name);
  // res.json(req.query);\
  res.render('index', {
    name: 'kev',
    cock: req.query.cock,
    title: 'DAT SOO ONO'
});

}