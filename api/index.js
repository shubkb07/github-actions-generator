const express = require("express");
const app = express();
const path = require("path");
var cors = require('cors')
const isProd = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const callBeAPI = async (apiPath, data) => {
  try {
    // Add bearer token to the request headers
    const bearerToken = 'lFMp9C1CLrsnfksN30h30aFjl9yk7ug9mHC8HwXtpU4bhVAEwReziDQxe8bQ2utQ';
    const response = await axios.post(process.env.BE_SERVER + apiPath, data, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`
      }
    });
    if (response.data.status === "error") {
      return Promise.reject(response.data);
    }
    return response.data;
  } catch (error) {
    console.error("Error calling backend API:", error);
    throw error;
  }
};

const api = async (req, res) => {
  try {
    // remove /api or /api/ from the request path
    const apiPath = req.url.replace(/^\/api?/, "");
    const response = await callBeAPI(apiPath, req.body);
    res.json({ status: "success", data: response });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

app.all("/api/*", async (req, res) => {
  api(req, res);
});

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


app.listen(port, () => {
  console.log(`port running at http://localhost:${port}`);
});

module.exports = app;