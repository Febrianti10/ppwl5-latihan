import { Database } from "bun:sqlite";
import { env } from "./env"; // Memanggil konfigurasi env sesuai tugas

// 1. Menggunakan env.DB_FILE alih-alih process.env secara langsung
export const db = new Database(env.DB_FILE);

/* =========================
   INIT TABLE
========================= */
export const initDB = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL
    );
  `);

  // Seed data awal jika tabel masih kosong
  const count = db.query("SELECT COUNT(*) as total FROM users").get() as { total: number };

  if (count.total === 0) {
    db.exec(`
      INSERT INTO users (name, role) VALUES
      ('Leo', 'Admin'),
      ('Budi', 'User'),
      ('Sinta', 'Editor');
    `);
  }

  console.log("✅ SQLite initialized");
};