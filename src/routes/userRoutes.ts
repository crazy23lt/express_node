import { UserController } from "@src/controllers";
import { Router } from "express";

const router = Router();
router.get("/", UserController.getUser);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
export default router;
