import React, { useCallback, useEffect, useState } from "react";
import API from "../../api";
import TestimonialForm from "./TestimonialForm";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface Testimonial {
  name: string;
  stars: number;
  comment: string;
  month: string;
  year: number;
}

interface Pagination {
  total: number;
  skip: number;
  limit: number;
  hasNextPage: boolean;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [pageInfo, setPageInfo] = useState<Pagination>({
    total: 0,
    skip: 0,
    limit: 3,
    hasNextPage: false,
  });

  const fetchTestimonials = useCallback(() => {
    API.Testimonial.List({
      params: {
        skip: pageInfo.skip,
        limit: pageInfo.limit,
      },
    })
      .then(({ data }) => {
        if (data.items?.length) {
          setTestimonials((currTestimonials) => {
            const newTestimonials = data.items.map((item: any) => {
              const date = new Date(item.createdAt);
              return {
                ...item,
                month: MONTHS[date.getMonth()],
                year: date.getFullYear(),
              };
            })
            const updatedTestimonials = [...currTestimonials, ...newTestimonials];
            return updatedTestimonials;
          }
          );
          setPageInfo((currPageInfo) => ({
            ...currPageInfo,
            skip: currPageInfo.limit + data.pageInfo.skip,
            limit: 10,
            hasNextPage: data.pageInfo.hasNextPage,
          }));
        }
      })
      .catch((err) => {});
  }, [pageInfo.limit, pageInfo.skip]);

  useEffect(() => {
    if(!testimonials.length)
    fetchTestimonials();
  }, [fetchTestimonials, testimonials.length]);

  const onSubmit = useCallback(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  return (
    <div className="testimonial-container container">
      <h4 className="mb-4 text-muted">
        <b>TESTIMONIALS</b>
      </h4>
      <div className="testimonial-content row d-flex flex-row flex-nowrap">
        {testimonials.map((testimonial, idx) => (
          <div className="col-12 col-lg-4" key={idx}>
            <div className="testimonial-card card">
              <div className="card-body">
                <div className="card-text">
                  <small>
                    <em>&#8220;{testimonial.comment}&#8221;</em>
                  </small>
                </div>
              </div>
              <div className="card-footer">
                <div className="hstack gap-3">
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
      <div className="row">
        <TestimonialForm viewMore={pageInfo.hasNextPage} onSubmit={onSubmit} onViewMore={fetchTestimonials} />
      </div>
    </div>
  );
}
