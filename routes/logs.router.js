import { Router } from "express";
import logController from "../controllers/log.controller.js";

const router = Router();

router.get("/", logController.logAllLevels);
router.get("/:el", logController.logCustomLevel);

export default router;