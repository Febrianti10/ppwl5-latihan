/* =========================
   SERVICE
   Tugas:
   1. pindahkan ke file khusus (user.service), dalam folder yang sesuai
   2. import user.repository, user.model, & user.type
   3. tambahkan delete(id: number) yang memanggil delete() dari userRepository
========================= */
import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

// Hanya ada SATU export const userService yang berisi semua logika
export const userService = {
  // Fungsi untuk mengambil semua data dan mapping ke UserModel
  getAll() {
    return userRepository.findAll().map((u) => new UserModel(u));
  },

  // Tugas 3: Implementasi fungsi delete yang memanggil repository
  delete(id: number) {
    userRepository.delete(id);
  },

  // Fungsi tambahan untuk create dan update
  create(user: User) {
    if (!user.name || !user.role) {
      throw new Error("Name and role required");
    }
    userRepository.create(user);
  },

  update(id: number, user: User) {
    userRepository.update(id, user);
  },
};
