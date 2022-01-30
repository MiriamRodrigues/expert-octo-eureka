const express = require('express')
const app = express()
const port = 3000

/*# Reset state before starting tests

POST /reset

200 OK*/

app.post('/reset', (req, res) => {
  res.status(200).send('Ok')
})

/*# Get balance for non-existing account

GET /balance?account_id=1234

404 0
*/

app.get('/balance', (req, res) => {
    res.status(404).send('0')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})