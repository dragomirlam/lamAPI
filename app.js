const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

app.get("/", (req, res) => {
  console.log('Responding to root route');
  res.send('Hello magkes!!!');
});

app.get("/users", (req, res) => {
  res.send('My users are:');
})

app.listen(3000, () => {
  console.log('Server is up and running!');
});
