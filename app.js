const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola Dapta TECH')
})

app.listen(port, () => {
  console.log(`Ejecutandose en el puerto ---> ${port}`)
})
