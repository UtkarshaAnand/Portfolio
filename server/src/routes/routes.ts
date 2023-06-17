import express from 'express';
import TestimonialRouter from '../apps/testimonial/testimonial.router';

const router = express.Router();

router.use('/testimonials', TestimonialRouter);

export { router };
