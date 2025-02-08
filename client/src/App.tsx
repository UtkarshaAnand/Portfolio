import { About, Navbar, Reviews, Gallery, FAQ, Enquire, Services } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-blush to-white">
        <Enquire />
        <Services />
      </div>
      <About />
      <Reviews />
      <Gallery />
      <FAQ />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
