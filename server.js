const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.end('API is working')
})

app.get('/test', (req, res) => {
  res.end('Tested !')
})

app.listen(8080, () => {
  console.log('Server started successfully')
})