import React, { useState } from "react";

const faqs = [
  {
    question: "Question 1",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "Question 2",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "Question 3",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section className="bg-blush">
      <p className="lg:text-4xl text-2xl text-center font-bold md:pt-12 pt-6">FAQs</p>
      <div className="grid grid-cols md:gap-8 gap-4 py-8 px-4 mx-auto lg:w-2/3 w-11/12 lg:py-16 lg:px-6">
        {faqs.map((faq, i) => (
          <div key={i} className="shadow-xl">
            <h2>
              <button
                type="button"
                className="flex items-center justify-between w-full lg:p-6 p-4 font-medium rtl:text-right text-navy bg-white gap-3"
                onClick={() =>
                  setActiveIndex((currIndex) => {
                    if (currIndex === null || currIndex !== i) return i;
                    return null;
                  })
                }
              >
                <span className="font-semibold md:text-lg text-base">{faq.question}</span>
                <div className="bg-navy">
                  {activeIndex === i ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-minus"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plus"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  )}
                </div>
              </button>
            </h2>
            {activeIndex === i && (
              <div className="p-5 bg-white px-6 pt-0">
                <p className="mb-2 text-navy">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
