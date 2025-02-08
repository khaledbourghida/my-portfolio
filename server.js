const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Serve index.html on the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  console.log(`New message from ${name} (${email}): ${message}`);

  res.send('Message received successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
