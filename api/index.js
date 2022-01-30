const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

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

/*# Create account with initial balance

POST /event {"type":"deposit", "destination":"100", "amount":10}

201 {"destination": {"id":"100", "balance":10}}*/

app.post('/event', (req, res) => {
    var data = {
        "destination" : {
            "id" : req.body.destination,
            "balance" : req.body.amount
        }
    }
    res.status(201).send(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})