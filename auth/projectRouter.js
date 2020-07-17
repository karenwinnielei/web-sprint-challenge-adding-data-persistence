const router = require('express').Router()

const Projects = require('./projectModel')

router.get('')

router.get('/test', (req, res) => {
  res.send('yes it is working');
});

module.exports = router