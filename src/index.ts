import express from "express";
import { PostRoutes, UserRoutes } from "@routes/index";
import { logger, notFound } from "./middlewares/index";
const app = express();
app.use(logger.default);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/express_api/users", UserRoutes.default);
app.use("/express_api/post", PostRoutes.default);
app.use(notFound.default);
app.listen(3000, () => {
  console.log("express running...");
});
