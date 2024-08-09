import { Request, Response } from "express";
import fs from "fs";
import Result from "@src/utils/result";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const urlencodedParser = (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  res.json(Result.success(body));
};

export const formdataParser = (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  res.json(Result.success());
};
export const formdataFileParser = (req: Request, res: Response) => {
  const file = req.file;
  if (file) {
    const filename = file?.filename;
    const filepath = path.join(__dirname, "../uploads", filename);
    fs.readFile(filepath, (err, data) => {
      if (err) {
        return res.json(Result.fail());
      } else {
        res.setHeader("Content-Type", "application/octet-stream");
        res.send(data);
      }
    });
  } else {
    res.json(Result.fail());
  }
};
