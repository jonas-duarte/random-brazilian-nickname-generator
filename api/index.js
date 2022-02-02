const app = require('express')();

const Rbng = require("../domain/rbng")

function randomGenerate() {
  let rbng = new Rbng(new Date().getTime())


  let randomFunctions = Rbng.getRandomInteger() % 5 - 1

  if (randomFunctions < 1) randomFunctions = 1

  let randomFunctionsPool = [
    "mapToRandomNumberSubstitution",
    "mapToRandomUpperCase",
    "mapToRandomNumberAtEnding",
  ]

  while (randomFunctions > 0) {
    rbng = rbng[randomFunctionsPool[Rbng.getRandomInteger() % randomFunctionsPool.length]]()
    randomFunctions--
  }

  return rbng
}

app.get('/api', (req, res) => {
  res.send(randomGenerate())
})

module.exports = app
