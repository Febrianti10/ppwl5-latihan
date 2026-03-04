import { Database } from "bun:sqlite";
import { env } from "./env";

// 1. Inisialisasi koneksi database menggunakan nama file dari env.ts
export const db = new Database(env.DB_FILE);

// 2. Fungsi untuk menyiapkan tabel database saat server pertama kali menyala
export const initDB = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL
    )
  `);
  console.log("✅ Tabel users siap digunakan!");
};
