function About() {
  return (
    <div className="bg-blush">
      <div className="pb-8 mx-auto w-full lg:pb-16 pt:8">
        <div className="xl:grid grid-cols-3">
          {/* <div className="shadow-lg shadow-stone-300"> */}
            <img src="dp.jpeg" alt="" className="h-full md:shadow-lg shadow-sm shadow-stone-300"/>
          {/* </div> */}
          <div className="p-8 lg:p-16 bg-navy overflow-y-auto md:shadow-md shadow-sm shadow-navy">
            <h3
              className={`md:text-4xl text-2xl font-semibold text-white text-center lg:mb-8 mb-4`}
            >
              About
            </h3>
            <p className="md:text-lg text-md text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="p-8 lg:p-16 bg-white overflow-y-auto md:shadow-xl shadow-sm shadow-stone-300">
            <h3
              className={`md:text-4xl text-2xl font-semibold text-navy text-center lg:mb-8 mb-4`}
            >
              Experience
            </h3>
            <p className="md:text-lg text-md text-navy">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
