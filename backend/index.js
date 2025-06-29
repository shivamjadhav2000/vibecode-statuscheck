const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files from ../public (adjust path as per your folder)
app.use(express.static(path.join(__dirname, '..', 'public')));


// Proxy Slack Status
app.get('/api/slack', async (req, res) => {
  try {
    const response = await fetch('https://status.slack.com/api/v2.0.0/current');
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Slack API error' });
  }
});

// Proxy GitHub Status
app.get('/api/github', async (req, res) => {
  try {
    const response = await fetch('https://www.githubstatus.com/api/v2/status.json');
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'GitHub API error' });
  }
});

// Proxy Zoom Status
app.get('/api/zoom', async (req, res) => {
  try {
    const response = await fetch('https://status.zoom.us/api/v2/status.json');
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Zoom API error' });
  }
});

// Proxy Cloudflare Status
app.get('/api/cloudflare', async (req, res) => {
  try {
    const response = await fetch('https://www.cloudflarestatus.com/api/v2/status.json');
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Cloudflare API error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
