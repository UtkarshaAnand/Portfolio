import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";

function ReviewModal({ onModalClose }: { onModalClose: () => void }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [rating, setRating] = useState<{ value: number; error: string }>({
    value: 0,
    error: "",
  });

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

      <div className="fixed inset-0 z-10 w-screen sm:w-1/2 mx-auto overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="flex flex-col gap-6 w-full mx-auto text-center text-black bg-white shadow-lg p-8">
            <p className="text-black font-semibold text-xl">Rate us</p>
            <hr />

            <form className="w-full mx-auto">
              <div className="flex flex-row gap-4 mb-4">
                <div className="basis-1/2">
                  <label className="block float-start mb-2 text-sm font-medium text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border shadow-md border-gray-300 text-black text-sm block w-full p-2"
                    required
                  />
                </div>
                <div className="basis-1/2">
                  <label className="block float-start mb-2 text-sm font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border shadow-md border-gray-300 text-black text-sm block w-full p-2"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col items-start">
                <label className="block float-start mb-2 text-sm font-medium text-black">
                  Rating
                </label>
                <StarRating
                  rating={rating.value}
                  onRatingSelect={(val) =>
                    setRating((currVal) => ({ ...currVal, value: val }))
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block float-start mb-2 text-sm font-medium text-black">
                  Feedback
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="border shadow-md border-gray-300 text-black text-sm  block w-full p-2"
                  placeholder="Please leave your feedback"
                ></textarea>
              </div>
              <div className="flex flex-row-reverse gap-4">
                <button
                  type="button"
                  className="inline-flex w-full justify-center bg-navy px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mauve hover:text-navy sm:w-auto"
                >
                  Submit
                </button>
                <button
                  onClick={handleModalClose}
                  type="button"
                  className="inline-flex w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ReviewModal;
