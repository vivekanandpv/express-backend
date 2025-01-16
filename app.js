const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.SERVER_PORT || 8000;

// Enable CORS
app.use(cors());

// Sample posts data
const posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first post',
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the content of the second post',
  },
  {
    id: 3,
    title: 'Third Post',
    content: 'This is the content of the third post',
  },
];

// Define the GET route
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
