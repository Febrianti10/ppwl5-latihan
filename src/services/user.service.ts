import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

export const userService = {
  getAll() {
    return userRepository.findAll().map((u) => new UserModel(u));
  },

  delete(id: number) {
    // implementasikan delete dari userRepository
  },
};

/* =========================
   SERVICE
   Tugas:
   1. pindahkan ke file khusus (user.service), dalam folder yang sesuai
   2. import user.repository, user.model, & user.type
   3. tambahkan delete(id: number) yang memanggil delete() dari userRepository
========================= */
const userService = {
  getAllUsers(): UserModel[] {
    return userRepository.findAll();
  },

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
