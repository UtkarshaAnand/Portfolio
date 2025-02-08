function Gallery() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto w-11/12 md:w-3/4 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 grid-flow-row md:gap-6 gap-2">
          <div className="grid grid-flow-row md:gap-6 gap-2">
            <div className="row-span-1">
              <img className="w-full h-full shadow-xl" src="dp.jpeg" alt="" />
            </div>
            <div className="grid grid-cols-2 md:gap-6 gap-2">
              <img className="h-full w-full shadow-xl" src="img-2.jpeg" alt="" />
              <img className="h-full w-full shadow-xl" src="img-3.jpeg" alt="" />
            </div>
          </div>
          <img className="h-full w-full shadow-xl" src="img-5.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
