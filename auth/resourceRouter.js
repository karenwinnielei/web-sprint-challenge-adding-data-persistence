const router = require('express').Router();

const Resources = require('./resourceModel');

router.get('/', (req, res) => {
  Resources.find()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Resources.findById(id)
    .then((resource) => {
      if (resource) {
        res.status(200).json(resource);
      } else {
        res.status(404).json({
          message: 'could not find resource with given id',
        });
      }
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const resourceData = req.body;

  Resources.add(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Failed to create new resource' });
    });
});

router.get('/test', (req, res) => {
  res.send('yes it is working');
});

module.exports = router