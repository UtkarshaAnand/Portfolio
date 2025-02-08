import React, { useEffect, useRef } from "react";

function ViewReview({ onModalClose }: { onModalClose: () => void }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalRef.current) modalRef.current?.showModal();
  }, []);

  const handleModalClose = (e: any) => {
    modalRef.current?.close();
    onModalClose();
  };

  return (
    <dialog ref={modalRef} onClose={onModalClose}>
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity ease-in-out"
        aria-hidden="false"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ease-in-out transition-all">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="flex flex-col mx-auto max-w-lg text-center text-black bg-white shadow-lg p-6">
            <div className={`flex items-center justify-start space-x-4 h-18`}>
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
                    .map((_, i) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        className="size-6 fill-yellow-500"
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
            <div className="p-4 text-left">
              <p className="font-light text-black text-lg sm:text-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={handleModalClose}
                className={`text-white bg-navy outline-none font-medium text-base px-4 py-2 text-center hover:text-navy hover:bg-mauve`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ViewReview;
