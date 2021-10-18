const express = require('express');
const axios = require('axios').default;

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  const { message } = req.body;
  const { author } = req.headers;

  if (!message) {
    return res.status(400).json({ success: false, error: 'Message is required!' });
  }

  if (!author) {
    return res.status(403).json({ success: false, error: 'Access denied!'})
  }

  try {
    await axios.post('http://localhost:3334/', {
      user: author,
    });
  } catch (err) {
    console.error('Error while logging', err);
  }

  return res.json({ success: true, message });
});

app.listen(3333);