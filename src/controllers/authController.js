const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../../database/users.json");

// KAYIT OL
exports.register = (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync(usersFile));

  users.push({ email, password });

  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  res.json({ message: "Kayıt başarılı" });
};

// GİRİŞ YAP
exports.login = (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync(usersFile));

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: "Giriş başarılı" });
  } else {
    res.status(401).json({ message: "Hatalı giriş" });
  }
};