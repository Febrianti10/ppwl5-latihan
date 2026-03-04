/* =========================
   ENV (Issue: Langsung di index)
   Tugas: 
   1. pindahkan ke file khusus (config/env.ts), 
   2. gunakan `export const env = {...}` untuk menyimpan data env
   3. tambahkan property DB_FILE berisi process.env.DB_FILE ke dalam `const env = {...}`
   4. cek kondisi if (!process.env.DB_FILE) console.warn("⚠ DB_FILE not set, using default database.sqlite");
========================= */

const PORT = Number(process.env.PORT) || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

console.log("Running in:", NODE_ENV);

// Tugas 4: Cek kondisi DB_FILE
if (!process.env.DB_FILE) {
  console.warn("⚠ DB_FILE not set, using default database.sqlite");
}

// Tugas 2 & 3: Export object env beserta property DB_FILE
export const env = {
  PORT,
  NODE_ENV,
  DB_FILE: process.env.DB_FILE || "database.sqlite",
};
