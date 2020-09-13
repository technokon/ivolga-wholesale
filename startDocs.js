const express = require('express');
const app = express();

app.use(express.static('documentation'))
app.listen(process.env.PORT || 4000)

