import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router()

router.get("/", userController.getAll)
router.get("/:id", userController.getByID)

export default router