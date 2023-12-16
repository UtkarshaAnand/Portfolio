import { InferSchemaType, model, Schema } from 'mongoose';
import { Presets } from '../../common';

const testimonialSchema = new Schema(
  {
    name: Presets.requiredStringType,
    rating: { ...Presets.positiveIntegerType, min: 1, max: 5, default: 5 },
    comment: Presets.requiredStringFunction(),
  },
  { timestamps: true },
);

export type Testimonial = InferSchemaType<typeof testimonialSchema>;

export default model<Testimonial>('Testimonial', testimonialSchema);
