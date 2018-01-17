const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const kev = { name: 'Kevin', age: '100', cool: true }
  // res.send('Hey! It works!');
  // res.json(kev);
  // res.send(req.query.name);
  // res.json(req.query);\
  res.render('hello', {
    name: 'kev',
    cock: req.query.cock,
    title: 'DAT SOO ONO'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
