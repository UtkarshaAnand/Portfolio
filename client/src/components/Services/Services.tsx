import { useState } from "react";
import { isEven } from "../../utils";
import Appointment from "./Appointment";

function Services() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section>
      <div className="py-8 px-4 mx-auto w-11/12 lg:py-16 lg:px-6">
        <div className="space-y-8 lg:grid grid-flow-col auto-cols-max sm:gap-6 lg:gap-10 lg:space-y-0 overflow-auto no-scrollbar lg:p-8">
          {Array(5)
            .fill(0)
            .map((_, i) => {
              let headerBg: string = "bg-mauve";
              let headerText: string = "text-navy";
              let buttonBg: string = "bg-navy";
              let buttonText: string = "text-white";
              if (!isEven(i)) {
                headerBg = "bg-navy";
                headerText = "text-white";
                buttonBg = "bg-mauve";
                buttonText = "text-navy";
              }
              return (
                <div
                  key={i}
                  className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hover:scale-110"
                >
                  <div
                    className={`flex items-center justify-center h-16 ${headerBg}`}
                  >
                    <h3 className={`text-2xl font-semibold ${headerText}`}>
                      Starter
                    </h3>
                  </div>
                  <div className="p-6 xl:p-8">
                    <p className="font-light text-gray-500 sm:text-lg">
                      Best option for personal use & for your next project.
                    </p>
                    <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">$29</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Individual configuration</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>No setup, or hidden fees</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Team size:{" "}
                          <span className="font-semibold">1 developer</span>
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Premium support:{" "}
                          <span className="font-semibold">6 months</span>
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Free updates:{" "}
                          <span className="font-semibold">6 months</span>
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setShowModal(true)}
                      className={`${buttonText} ${buttonBg} font-medium text-base px-4 py-2 text-center hover:${headerText} hover:${headerBg} uppercase`}
                    >
                      Book
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {showModal && <Appointment onModalClose={() => setShowModal(false)} />}
    </section>
  );
}

export default Services;
