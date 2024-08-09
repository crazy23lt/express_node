import express from "express";
import { LoginRoutes, PostRoutes, UserRoutes } from "@routes/index";
import { logger, notFound } from "@middlewares/index";
const app = express();
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/express_api/users", UserRoutes);
app.use("/express_api/post", PostRoutes);
app.use('/express_api/account',LoginRoutes)
app.use(notFound);
app.listen(3000, () => {
  console.log("express running...");
});
