import { Router } from "express";
import mediaRouter from "./media.router";

const router = Router();

// /api/v1/media
router.use("/media", mediaRouter);

export default router;
