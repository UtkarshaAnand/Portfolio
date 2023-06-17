import React, { useCallback, useEffect, useState } from 'react';
import API from '../../api';
import TestimonialForm from './TestimonialForm';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface Testimonial {
  name: string;
  stars: number;
  comment: string;
  month: string;
  year: number;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const fetchTestimonials = useCallback(() => {
    API.Testimonial.List()
      .then(({ data }) => {
        if (data.items?.length)
          setTestimonials(() =>
            data.items.map((item: any) => {
              const date = new Date(item.createdAt);
              return {
                ...item,
                month: MONTHS[date.getMonth()],
                year: date.getFullYear(),
              };
            }),
          );
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const onSubmit = useCallback(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  return (
    <div className="testimonial-container container">
      <h4 className="mb-4 text-muted">
        <b>TESTIMONIALS</b>
      </h4>
      <div className="testimonial-content row">
        {testimonials.map((testimonial, idx) => (
          <div className='col' key={idx}>
            <div className="testimonial-card card">
              <div className='card-body'>
                <div className='card-text'>
                  <small>
                    <em>&#8220;{testimonial.comment}&#8221;</em>
                  </small>
                </div>
              </div>
              <div className='card-footer'>
                <div className='hstack gap-3'>
                  <small className="blockquote-footer" style={{ margin: 0 }}>
                    {testimonial.name}
                  </small>
                  <small
                    className="text-muted ms-auto"
                    style={{ margin: 0 }}
                  >{`${testimonial.month}, ${testimonial.year}`}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='row'>
        <TestimonialForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
