/* =========================
   REPOSITORY (SQLite)
   Tugas:
    1. Pindahkan ke file khusus (user.repository), dalam folder yang sesuai
    2. gunakan export const ...
    3. tambahkan delete(id: number) dengan query "DELETE FROM users WHERE id = ?"
========================= */
import { db } from "../config/db";
import { type User } from "../types/user.type";
import { UserModel } from "../models/user.model";

export const userRepository = {
  // Mengambil semua data dan mengubahnya menjadi array of UserModel
  findAll(): UserModel[] {
    const rows = db.query("SELECT id, name, role FROM users").all() as User[];
    return rows.map((user) => new UserModel(user));
  },

  // Menambahkan user baru ke database
  create(user: User) {
    db.query("INSERT INTO users (name, role) VALUES (?, ?)").run(
      user.name,
      user.role,
    );
  },

  // Memperbarui data user berdasarkan ID
  update(id: number, user: User) {
    db.query("UPDATE users SET name = ?, role = ? WHERE id = ?").run(
      user.name,
      user.role,
      id,
    );
  },

  // Tugas No. 3: Implementasi fungsi delete
  delete(id: number) {
    db.query("DELETE FROM users WHERE id = ?").run(id);
  },
};