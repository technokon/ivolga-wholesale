const express = require('express');
const app = express();

app.use(express.static('ivolga'))
app.listen(process.env.PORT || 3000)

