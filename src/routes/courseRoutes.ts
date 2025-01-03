import express from 'express';
import { getCourse, listCourse } from '../controllers/courseControllers';

const router = express.Router();
router.get('/', listCourse);
router.get('/:courseId', getCourse);

export default router;