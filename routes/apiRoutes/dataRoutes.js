
const router = require('express').Router();
const { getAndRenderNotes, getNotes} = require('../../public/assets/js/index');
const { data } = require('../../lib/data');

router.get('/data', (req, res) => {
  let results = data;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/data/:id', (req, res) => {
  const result = findByTitle(req.params.id, data);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/data', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = data.length.toString();

  if (!validateData(req.body)) {
    res.status(400).send('The data is not properly formatted.');
  } else {
    const data = createNewData(req.body, data);
    res.json(data);
  }
});

module.exports = router;