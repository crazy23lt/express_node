import path from "path";
import { PostController } from "@src/controllers";
import { Router } from "express";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // 保留文件原始的扩展名
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    cb(null, `${basename}-${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });
const router = Router();
router.post("/urlencoded", PostController.urlencodedParser);
/**
 * 处理文本 upload.none()
 */
router.post("/form-data", upload.none(), PostController.formdataParser);
router.post(
  "/form-data/file",
  upload.single("avatar"),
  PostController.formdataFileParser
);
export default router;
