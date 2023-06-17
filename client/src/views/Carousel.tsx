import { Carousel as BootStrapCarousel } from 'react-bootstrap';

function Carousel() {
    return (
      <div style={{ paddingBottom: 20}}>          
        <BootStrapCarousel indicators={false} interval={2000} slide={false}>
          <BootStrapCarousel.Item>
            <img
              className="d-block w-100"
              src="./img-1.jpeg"
              alt="First slide"
              style={{ maxHeight: 500 }}
            />
            <BootStrapCarousel.Caption>
              <h1>Dr. Sugata Mishra</h1>
              <h5>M.B.B.S, M.S., D.N.B (OBS & GYNAE), Fellowship in Reproductive Medicine</h5>
            </BootStrapCarousel.Caption>
          </BootStrapCarousel.Item>
          <BootStrapCarousel.Item>
            <img
              className="d-block w-100"
              src="./img-2.jpeg"
              alt="Second slide"
              style={{ maxHeight: 500 }}
            />

            <BootStrapCarousel.Caption>
              <h1>Dr. Sugata Mishra</h1>
              <h5>M.B.B.S, M.S., D.N.B (OBS & GYNAE), Fellowship in Reproductive Medicine</h5>
            </BootStrapCarousel.Caption>
          </BootStrapCarousel.Item>
          <BootStrapCarousel.Item>
            <img
              className="d-block w-100"
              src="./img-3.jpeg"
              alt="Third slide"
              style={{ maxHeight: 500 }}
            />

            <BootStrapCarousel.Caption>
              <h1>Dr. Sugata Mishra</h1>
              <h5>M.B.B.S, M.S., D.N.B (OBS & GYNAE), Fellowship in Reproductive Medicine</h5>
            </BootStrapCarousel.Caption>
          </BootStrapCarousel.Item>
          <BootStrapCarousel.Item>
            <img
              className="d-block w-100"
              src="./img-4.jpeg"
              alt="Fourth slide"
              style={{ maxHeight: 500 }}
            />

            <BootStrapCarousel.Caption>
              <h1>Dr. Sugata Mishra</h1>
              <h5>M.B.B.S, M.S., D.N.B (OBS & GYNAE), Fellowship in Reproductive Medicine</h5>
            </BootStrapCarousel.Caption>
          </BootStrapCarousel.Item>
          <BootStrapCarousel.Item>
            <img
              className="d-block w-100"
              src="./img-5.jpeg"
              alt="Fifth slide"
              style={{ maxHeight: 500 }}
            />

            <BootStrapCarousel.Caption>
              <h1>Dr. Sugata Mishra</h1>
              <h5>M.B.B.S, M.S., D.N.B (OBS & GYNAE), Fellowship in Reproductive Medicine</h5>
            </BootStrapCarousel.Caption>
          </BootStrapCarousel.Item>
          <BootStrapCarousel.Item>
            <img
              className="d-block w-100"
              src="./img-6.jpeg"
              alt="Siz=xth slide"
              style={{ maxHeight: 500 }}
            />

            <BootStrapCarousel.Caption>
              <h1>Dr. Sugata Mishra</h1>
              <h5>M.B.B.S, M.S., D.N.B (OBS & GYNAE), Fellowship in Reproductive Medicine</h5>
            </BootStrapCarousel.Caption>
          </BootStrapCarousel.Item>
        </BootStrapCarousel>
      </div>
    );  
}

export default Carousel;