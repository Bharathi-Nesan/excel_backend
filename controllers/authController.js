const jwt = require("jsonwebtoken");
const users = []; // In-memory user storage (for demo only)

exports.register = (req, res) => {
  const { email, password } = req.body;

  const exists = users.find((u) => u.email === email);
  if (exists) return res.status(409).json({ message: "User already exists" });

  users.push({ email, password });
  const token = jwt.sign({ email }, "secretKey", { expiresIn: "1h" });
  res.json({ token });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ email }, "secretKey", { expiresIn: "1h" });
  res.json({ token });
};
