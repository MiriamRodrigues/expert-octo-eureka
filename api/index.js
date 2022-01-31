const express = require('express');
const app = express();
const port = 3000

const accountsRoutes = require('./routes/accountsRoutes');

app.use(express.json())
app.use(accountsRoutes);

app.listen(port, () => {
    console.log(`API Running on port ${port}`)
})