const axios = require("axios");

function makeCircularReplacer() {
  const seen = new WeakSet();

  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular]";
      }
      seen.add(value);
    }
    return value;
  };
}

const callBeAPI = async (apiPath, data) => {
  try {
    // Add bearer token to the request headers
    const bearerToken = 'lFMp9C1CLrsnfksN30h30aFjl9yk7ug9mHC8HwXtpU4bhVAEwReziDQxe8bQ2utQ';
    console.log(process.env.BE_SERVER + apiPath);
    const response = await axios.post(process.env.BE_SERVER + apiPath, data, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`
      }
    });
    console.log(response.data);
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

module.exports = api;
