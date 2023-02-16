const express = require('express');
const app = express();
app.use(express.json());

// Array of web projects
const webProjects = [
  {
    id: 1,
    title: 'React Game!',
    description: 'Tic tac toe game created using Create React app.',
    URL: 'https://github.com/MartaAija/TicTacToe'
  },
  {
    id: 2,
    title: 'Online store',
    description: 'Online store created with HTML, CSS and JavaScript.',
    URL: 'https://github.com/MartaAija/finalCapostone'
  }
];

// GET request to return the list of web projects
app.get('/api', (req, res) => {
  res.send(webProjects);
});

// POST request to add a web project
app.post('/api', (req, res) => {
  const webProject = {
    id: webProjects.length + 1,
    title: req.body.title,
    description: req.body.description,
    URL: req.body.URL
  };
  webProjects.push(webProject);
  res.send(webProject);
});

// DELETE request to remove a web project by id
app.delete('/api/:id', (req, res) => {
  const webProject = webProjects.find(wp => wp.id === parseInt(req.params.id));
  if (!webProject) return res.status(404).send('Web project not found');
  const index = webProjects.indexOf(webProject);
  webProjects.splice(index, 1);
  res.send(webProject);
});

// PUT request to update a web project by id
app.put('/api/:id', (req, res) => {
  const webProject = webProjects.find(wp => wp.id === parseInt(req.params.id));
  if (!webProject) return res.status(404).send('Web project not found');
  webProject.title = req.body.title;
  webProject.description = req.body.description;
  res.send(webProject);
});

// Start the server
app.listen(8080, () => console.log('Listening on port 8080...'));
