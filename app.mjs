import express from 'express';

const app = express();
const port = 4000;

const data = {
  data: {
    name: 'john',
    age: 20
  }
};

app.get('/profiles', (req, res) => {
  return res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
