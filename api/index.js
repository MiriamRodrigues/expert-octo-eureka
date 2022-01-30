const express = require('express')
const app = express()
const port = 3000

/*# Reset state before starting tests

POST /reset

200 OK*/

app.post('/reset', (req, res) => {
  res.status(200).send('Ok')
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})