// api/index.js

import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/quote', async (req, res) => {
  try {
    const response = await axios.get('https://favqs.com/api/qotd', {
      headers: {
        'Authorization': 'Bearer d9efc5c19c4876b2ee43d19af4dd2c46'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quote', error: error.message });
  }
});

app.get('/api/quote/search', async (req, res) => {
  const author = req.query.author;
  try {
    const response = await axios.get(`https://favqs.com/api/quotes/?filter=${author}&type=author`, {
      headers: {
        'Authorization': 'Bearer d9efc5c19c4876b2ee43d19af4dd2c46'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quotes', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

