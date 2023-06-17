import 'dotenv/config';
import express from 'express';
import { Presets } from '../../common';
import * as TestimonialOperator from './testimonial.operator';

const router = express.Router();

router.post('/create', TestimonialOperator.createTestimonial);

router.get('/list', TestimonialOperator.getTestimonials);

router.get(`/:id(${Presets.OBJECT_ID_PATTERN})`, TestimonialOperator.getTestimonial);

export default router;
