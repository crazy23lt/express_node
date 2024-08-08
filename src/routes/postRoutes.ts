import { PostController } from "@src/controllers";
import { Router } from "express";

const router = Router();
router.post("/urlencoded", PostController.urlencodedParser);

export default router;
