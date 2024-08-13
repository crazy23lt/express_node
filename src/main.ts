import express from "express";
import {
  CacheRoutes,
  LoginRoutes,
  PostRoutes,
  UserRoutes,
} from "@routes/index";
import { logger, notFound } from "@middlewares/index";
const app = express();
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", UserRoutes);
app.use("/api/post", PostRoutes);
app.use("/api/account", LoginRoutes);
app.use("/api/cache", CacheRoutes);
app.use(notFound);
app.listen(3000, () => {
  console.log("express running...");
});
