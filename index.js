const express = require('express');
const movies = require("./routes/movies");

const app = express();
const port = 8000;

app.use(express.json());

app.use("/movies", movies);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
