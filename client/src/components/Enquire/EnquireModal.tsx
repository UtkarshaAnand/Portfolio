import { useEffect, useRef, useState } from "react";
import { GENDERS } from "../../constants";

function EnquireModal({ onModalClose }: { onModalClose: () => void }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedGender, setSelectedGender] = useState(0);

  useEffect(() => {
    if (modalRef.current) modalRef.current?.showModal();
  }, []);

  const handleModalClose = (e: any) => {
    modalRef.current?.close();
    onModalClose();
  };

  const handleGenderSelect = (index: number) => {
    setSelectedGender(index);
    setShowDropdown(false);
  };

  return (
    <dialog ref={modalRef} onClose={onModalClose}>
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity ease-in-out"
        aria-hidden="false"
      ></div>

      <div className="fixed inset-0 z-10 w-screen sm:w-1/2 m-auto overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="flex flex-col gap-6 w-full mx-auto text-center text-black bg-white shadow-lg p-8">
            <p className="text-black font-semibold text-xl">Ask us anything</p>
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
              <div className="flex flex-row gap-4 mb-4">
                <div className="basis-1/2">
                  <label
                    id="listbox-label"
                    className="block float-start mb-2 text-sm font-medium text-black"
                  >
                    Gender
                  </label>
                  <div className="relative mt-2">
                    <button
                      type="button"
                      className="relative w-full shadow-md border border-gray-300 bg-white p-2 text-sm text-left text-black"
                      onClick={() => setShowDropdown((val) => !val)}
                    >
                      <span className="flex items-center">
                        <span className="block truncate">
                          {GENDERS[selectedGender]}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <svg
                          className="size-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                    {showDropdown && (
                      <ul
                        className="absolute z-10 mt-1 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                        tabIndex={-1}
                      >
                        {GENDERS.map((gender, i) => (
                          <li
                            key={i}
                            onClick={() => handleGenderSelect(i)}
                            className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-black"
                          >
                            <div className="flex items-center">
                              <span
                                className={`block truncate ${
                                  selectedGender === i
                                    ? "font-semibold"
                                    : "font-normal"
                                }`}
                              >
                                {gender}
                              </span>
                            </div>
                            {selectedGender === i && (
                              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-navy">
                                <svg
                                  className="size-4"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  data-slot="icon"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="basis-1/2">
                  <label className="block float-start mb-2 text-sm font-medium text-black">
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="Enter you age"
                    className="border shadow-md border-gray-300 text-black text-sm block w-full p-2"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block float-start mb-2 text-sm font-medium text-black">
                  Your query
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="border shadow-md border-gray-300 text-black text-sm  block w-full p-2"
                  placeholder="Ask us anything"
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

export default EnquireModal;
