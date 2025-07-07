const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
  const data = req.body;

  fs.appendFile('data/responses.json', JSON.stringify(data) + '\n', err => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).json({ message: 'Server error.' });
    }
    res.json({ message: 'Submission successful!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
