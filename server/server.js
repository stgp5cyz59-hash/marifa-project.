const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..")));

const db = new sqlite3.Database("./database.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        role TEXT,
        color TEXT
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS favorites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        surah_id INTEGER
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender_id INTEGER,
        receiver_id TEXT,
        text TEXT,
        time TEXT
    )`);

  console.log("✅ База данных и таблицы готовы");
});

app.post("/api/register", (req, res) => {
  const { name, email, password, role } = req.body;
  const color = "#8a4a5f";

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "Заполните все поля" });
  }

  const sql = `INSERT INTO users (name, email, password, role, color) VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [name, email, password, role, color], function (err) {
    if (err) {
      console.error(err.message);
      return res
        .status(400)
        .json({ error: "Пользователь с таким email уже существует" });
    }
    res.json({
      success: true,
      user: { id: this.lastID, name, email, role, color },
    });
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.get(sql, [email, password], (err, row) => {
    if (err) return res.status(500).json({ error: "Ошибка сервера" });
    if (!row)
      return res.status(401).json({ error: "Неверный email или пароль" });

    res.json({ success: true, user: row });
  });
});

app.get("/api/students", (req, res) => {
  db.all(
    `SELECT id, name, email, color FROM users WHERE role = 'student'`,
    [],
    (err, rows) => {
      if (err) return res.status(500).json({ error: "Ошибка БД" });
      res.json(rows);
    },
  );
});
// API ДЛЯ ЧАТА (сохранение сообщений)
app.post("/api/messages", (req, res) => {
  const { sender_id, receiver_id, text, time } = req.body;
  const sql = `INSERT INTO messages (sender_id, receiver_id, text, time) VALUES (?, ?, ?, ?)`;
  db.run(sql, [sender_id, receiver_id, text, time], function (err) {
    if (err) return res.status(500).json({ error: "Ошибка отправки" });
    res.json({ success: true, id: this.lastID });
  });
});

// API ДЛЯ ЧАТА (получение сообщений)
app.get("/api/messages/:receiver_id", (req, res) => {
  const receiver_id = req.params.receiver_id;
  const sql = `SELECT * FROM messages WHERE receiver_id = ? ORDER BY id ASC`;
  db.all(sql, [receiver_id], (err, rows) => {
    if (err) return res.status(500).json({ error: "Ошибка БД" });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  console.log(`📁 Сайт доступен по адресу http://localhost:${PORT}/index.html`);
});
