import express, { Request, Response } from "express";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.post("/", (req: Request, res: Response) => {
    return res.json({
        message: "Hello World"
    })
});

export default router;