const router = require('express').Router();

const Projects = require('./projectModel');
const Resources = require('./resourceModel');
const Tasks = require('./taskModel');

router.get('/', (req, res) => {
  Resources.find()
    .then((resource) => {
      res.status(200).json(resource);
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

module.exports = router