import { RequestHandler } from 'express';
import createHttpError from 'http-errors';
import mongoose from 'mongoose';
import TestimonialModel from './testimonial.model';

const getTestimonials: RequestHandler = async (req, res, next) => {
  try {
    const testimonials = await TestimonialModel.find(
      {},
      {},
      { limit: 3, sort: { createdAt: -1 } },
    ).exec();
    res.status(200).send({ items: testimonials });
  } catch (err) {
    next(err);
  }
};

const createTestimonial: RequestHandler = async (req, res, next) => {
  try {
    const { name, comment } = req.body;
    if (!name) {
      throw createHttpError(400, 'Name is required');
    }
    if (!comment) {
      throw createHttpError(400, 'Comment is required');
    }
    const newTestimonial = await TestimonialModel.create({
      name,
      comment,
    });
    res.status(200).json({ data: newTestimonial });
  } catch (err) {
    next(err);
  }
};

const getTestimonial: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, 'Invalid ID');
    }
    const testimonial = await TestimonialModel.findById(id);
    if (!testimonial) throw createHttpError(400, 'Testimonial not found');
    res.status(200).send({ data: testimonial });
  } catch (err) {
    next(err);
  }
};

export { getTestimonials, createTestimonial, getTestimonial };