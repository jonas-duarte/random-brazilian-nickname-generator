const express = require("express")

const Rbng = require("./rbng")

function randomGenerate() {
    let rbng = new Rbng(new Date().getTime())
    if (Rbng.getRandomInteger() % 5 === 0) rbng = rbng.mapToRandomNumberSubstitution()
    if (Rbng.getRandomInteger() % 5 === 0) rbng = rbng.mapToRandomUpperCase()
    if (Rbng.getRandomInteger() % 3 === 0) rbng = rbng.mapToRandomNumberAtEnding()
    return rbng
}

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(randomGenerate())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})