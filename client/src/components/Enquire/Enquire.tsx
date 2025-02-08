import { useState } from "react";
import EnquireModal from "./EnquireModal";

function Enquire() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <div className="mx-auto w-11/12">
        <div className="md:grid grid-flow-col py-8 px-12 lg:py-16 lg:px-20">
          <div className="flex flex-col col-span-1">
            <p className="font-bold md:text-6xl text-4xl mb-4">
              Dr. Sugata Mishra
            </p>
            <p className="font-semibold md:text-2xl text-lg md:mb-12 mb-8">
              MBBS, MS, DNB (Obstetrics and Gynaecology)
            </p>
            <p className="font-medium md:text-xl text-md mb-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button onClick={() => setShowModal(true)} className="uppercase bg-navy text-white text-center hover:bg-mauve hover:text-navy w-fit text-lg md:font-bold font-semibold md:px-8 md:py-4 px-4 py-2">
              Enquire
            </button>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      {showModal && <EnquireModal onModalClose={() => setShowModal(false)} />}
    </section>
  );
}

export default Enquire;
