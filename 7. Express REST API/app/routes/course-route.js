import express from 'express';

import * as courseController from '../controllers/course-controller.js'

const router = express.Router();

router.route('/')
    .get(courseController.find)
    .post(courseController.post);

router.route('/:id')
    .get(courseController.get)
    .put(courseController.put)
    .put(courseController.remove)

export default router;