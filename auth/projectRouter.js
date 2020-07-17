const router = require('express').Router()

const Projects = require('./projectModel')
const Tasks = require('./taskModel')

router.get('/', (req, res) => {
  Projects.find()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
const {id} = req.params
  Projects.findById(id)
    .then((project) => {
      console.log(project)
      res.status(200).json(project);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Failed to create new project' });
    });
});

router.get('/:id/tasks', (req, res) => {
  const {id} = req.params
  Tasks.findTasks(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => res.status(500).json(err));
})

router.post('/:id/tasks', (req, res) => {
  const taskData = req.body;

  Tasks.add(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Failed to create new task' });
    });
});

router.get('/test', (req, res) => {
  res.send('yes it is working');
});

module.exports = router