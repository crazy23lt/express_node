import { CacheController } from "@src/controllers";
import { Cache } from "@src/middlewares";
import { Router } from "express";

const router = Router();
router.get("/default", Cache, CacheController.httpCacheFn);

export default router;
