const express = require("express");
const app = express();
const path = require("path");
var cors = require('cors')
const isProd = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const api = require('./api');

dotenv.config();

app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

app.all("/api/*", async (req, res) => {
  api(req, res);
});

if (isProd) {
  // Serve static files from the dist directory
  app.use(express.static(path.join(__dirname, "dist")));

  // Handle SPA routing, return index.html for any unknown routes except /api/*
  app.all("*", (req, res) => {
    if (req.path.startsWith("/api")) {
      api(req, res);
    } else {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    }
  });
} else {
  app.all("*", (req, res) => {
    if (req.path.startsWith("/api")) {
      api(req, res);
    } else {
      res.json({ status: "failed" });
    }
  });
}

app.listen(port, () => {
  console.log(`port running at http://localhost:${port}`);
});
