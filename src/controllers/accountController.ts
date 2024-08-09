import { Request, Response } from "express";
import Result from "@src/utils/result";


export const loginAccount = (req: Request, res: Response) => {
    console.log(req.body)
    res.json(Result.success())
};
export const registerAccount = (req: Request, res: Response) => {};
export const logoutAccount = (req: Request, res: Response) => {};
