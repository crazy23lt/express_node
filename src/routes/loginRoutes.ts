import { BaseController } from "@src/controllers";
import { Router } from "express";

const router = Router();
router.post("/login", BaseController.loginAccount);
router.post("/register", BaseController.registerAccount);
router.post("/logout", BaseController.logoutAccount);
export default router;
