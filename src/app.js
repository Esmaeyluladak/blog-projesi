const express = require("express");
const path = require("path");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 3000;

// Formlardan ve JSON isteklerinden gelen verileri okuyabilmek için
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// public klasörünü kullanıcıya açıyoruz
app.use(express.static(path.join(__dirname, "../public")));

// auth route dosyasını bağlıyoruz
app.use("/api/auth", authRoutes);

// Ana sayfa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Server başlatma
app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});