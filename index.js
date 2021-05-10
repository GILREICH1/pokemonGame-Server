const express = require('express');
const app = express();

const PORT = 3001;

const scores = {
  vikvikvr: 120,
  gilzzzzz: 119
}

function saveHighestScore(username, score) {
  if (username in scores) {
    scores[username] = Math.max(score, scores[username]);
  } else {
    scores[username] = score;
  }
}

app.use(express.json())

app.get('/scores', (req, res) => {
  res.send(scores)
})

app.post('/scores', (req, res) => {
  const {
    username,
    score
  } = req.body;
  saveHighestScore(username, score)
  res.send('score saved')
})

app.listen(PORT,
  console.log(`pokemon-game-server running on port ${PORT}`)
)
