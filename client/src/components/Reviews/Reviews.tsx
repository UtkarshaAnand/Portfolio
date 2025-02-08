import React, { useEffect, useRef, useState } from "react";
import ViewReview from "./ViewReview";
import ReviewModal from "./ReviewModal";

function Reviews() {
  const reviewTextRefs = useRef<any>([]);

  const [reviewShowMore, setReviewShowMore] = useState(Array(5).fill(false));
  const [showModal, setShowModal] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    if (reviewTextRefs.current.length)
      setReviewShowMore(
        reviewTextRefs.current.map(
          (ref: any) => ref.clientHeight < ref.scrollHeight
        )
      );
  }, []);

  return (
    <div className="bg-blush">
      <p className="lg:text-4xl text-2xl text-center font-bold pt-12">
        What do our patients think?
      </p>
      <div className="py-8 px-4 mx-auto w-11/12 lg:py-16 lg:px-6">
        <div className="grid grid-flow-col auto-cols-max gap-6 lg:gap-10 lg:space-y-0 overflow-auto no-scrollbar lg:p-6 scroll-smooth">
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return (
                <div
                  className="flex flex-col mx-auto max-w-lg h-64 text-center text-black bg-white shadow-lg p-6"
                  key={i}
                >
                  <div
                    className={`flex items-center justify-start space-x-4 h-18`}
                  >
                    <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-navy rounded-full">
                      <span className="font-bold text-xl text-white">SM</span>
                    </div>
                    <div className="flex flex-col text-left">
                      <p className="text-black font-medium sm:text-lg">
                        Shaina Mishra
                      </p>
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, j) => (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              className="size-6 fill-yellow-500"
                              key={j}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                              />
                            </svg>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-left overflow-hidden">
                    <p
                      ref={(el) => (reviewTextRefs.current[i] = el)}
                      className="font-light text-black md:text-lg text-md line-clamp-4"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    {reviewShowMore[i] && (
                      <p
                        onClick={() => setShowModal(true)}
                        className="text-sm float-right text-mauve cursor-pointer"
                      >
                        Read more
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => setShowReviewForm(true)}
            className={`text-white bg-navy font-medium text-base px-4 py-2 text-center hover:text-navy hover:bg-mauve uppercase w-fit`}
          >
            Write a review
          </button>
        </div>
      </div>
      {showModal && <ViewReview onModalClose={() => setShowModal(false)} />}
      {showReviewForm && <ReviewModal onModalClose={() => setShowReviewForm(false)} />}
    </div>
  );
}

export default Reviews;
