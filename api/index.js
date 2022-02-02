const app = require('express')();

const Rbng = require("../domain/rbng")

function randomGenerate() {
    let rbng = new Rbng(new Date().getTime())
    if (Rbng.getRandomInteger() % 5 === 0) rbng = rbng.mapToRandomNumberSubstitution()
    if (Rbng.getRandomInteger() % 5 === 0) rbng = rbng.mapToRandomUpperCase()
    if (Rbng.getRandomInteger() % 3 === 0) rbng = rbng.mapToRandomNumberAtEnding()
    return rbng
}

app.get('/api', (req, res) => {
  res.send(randomGenerate())
})

module.exports = app
