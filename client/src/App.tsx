import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar, Banner, Pricing, About, Testimonials, Video, Footer, } from './views';

function App() {
  return (
    <Container className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <Pricing/>
      <Testimonials/>
      <Video/>
      <Footer/>
    </Container>
  );
}

export default App;
