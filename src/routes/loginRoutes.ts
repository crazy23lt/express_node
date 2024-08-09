import { AccountController } from "@src/controllers";
import { Router } from "express";

const router = Router();
router.post("/login", AccountController.loginAccount);

export default router;
