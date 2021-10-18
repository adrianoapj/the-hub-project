const express = require('express');

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  const { user } = req.body;

  if (!user) {
    return res.status(400).json({ success: false, error: 'User is required!' });
  }

  console.log(`[LOG] User ${user} sent a message!`)

  return res.json({ success: true });
});

app.listen(3334);