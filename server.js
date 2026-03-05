const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Email/Username:", email);
  console.log("Password:", password);

  res.json({ message: "Credentials received" });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});