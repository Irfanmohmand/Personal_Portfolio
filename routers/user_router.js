import express from "express";
const router = express.Router();
import { userMsg } from "../controllers/user_controller.js";


router.post("/", userMsg);

export default router;
