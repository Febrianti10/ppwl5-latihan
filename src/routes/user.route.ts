/* =========================
   ROUTE + APP + SERVER
   Tugas:
    1. Pisahkan jadi file `user.route.ts`, `app.ts`, & `server.ts`
    
    # User Route
    2. user.route.ts menjalankan elysia `const userRoutes = new Elysia()`
    3. Gunakan kode ini di user.route.ts (import user.service, user.view, & response.ts):
      .get("/", () => {
        const users = userService.getAll();
        return htmlResponse(userView(users));
      })

      .post("/create", async ({ body }) => {
        const data = body as any;
        userService.create({ name: data.name, role: data.role });
        return redirect("/");
      })

      .post("/delete/:id", ({ params }) => {
        userService.delete(Number(params.id));
        // jalankan return redirect ke root
      });

    # App
    4. app.ts menjalankan `const app = new Elysia().use(userRoutes);` (jangan lupa export app)
    
    # Server
    3. Fungsi initDB diletakkan dalam config/db.ts
    4. server.ts mengimport app, env, & initDB
    5. server.ts menjalankan `app.listen(env.PORT)`, initDB(), & console.log(`🚀 Server running ...`)
========================= */
import { Elysia } from "elysia";
import { userService } from "../services/user.service";
import { userView } from "../views/user.view";
import { htmlResponse, redirect } from "../utils/response";

export const userRoutes = new Elysia()
  .get("/", () => {
    const users = userService.getAll();
    // Mengganti komentar dengan memanggil fungsi view dan response
    return htmlResponse(userView(users));
  })
  .post("/create", async ({ body }) => {
    const data = body as any;
    userService.create({ name: data.name, role: data.role });
    return redirect("/");
  })
  .post("/delete/:id", ({ params }) => {
    userService.delete(Number(params.id));
    // Mengganti komentar dengan redirect ke root
    return redirect("/");
  });