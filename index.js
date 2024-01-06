const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000


app.get('/', (req, res) => {
    res.send('Hello from StayVista Server..')
  })
  
  app.listen(port, () => {
    console.log(`StayVista is running on port ${port}`)
  })