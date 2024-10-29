import express from 'express';
let x = 'Hello'; // This will trigger an ESLint error
const app = express();

app.listen(3000, () => {
  console.log('App is listening on 3000'); // This will also trigger an ESLint error
  process.exit(1);
});

app.get('/', function (req, res) {
  res.send('Hello');
});

const obj = {
  hello: function () {
    console.log('hello');
  },
};
const new=