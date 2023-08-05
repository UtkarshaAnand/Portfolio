const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function Footer() {
  return (
    <div id='contact'>
      <div className="footer-container">
      </div>
      <div className="row">
        <div className="contact-container col-12 col-lg-4">
          <div className="vstack gap-4">
            <div className="d-flex flex-column align-items-left justify-content-center px-4">
              <h5 style={{ textAlign: 'justify', color: 'white' }}>Address:</h5>
              <small style={{ textAlign: 'left', color: 'white' }}>
              3rd Floor, Rudramani building, 1720, Laskarhat, Eastern Metropolitan Bypass, Bypaas, Kolkata, West Bengal 700039
              </small>
            </div>
            <div className="d-flex flex-column align-items-left justify-content-center px-4">
              <h5 style={{ textAlign: 'justify', color: 'white' }}>Contact:</h5>
              <small style={{ textAlign: 'left', color: 'white' }}>+91 7903048020</small>
            </div>
            <div className="d-flex flex-column align-items-left justify-content-center px-4">
              <h5 style={{ textAlign: 'justify', color: 'white' }}>Opening hours:</h5>
              <small style={{ textAlign: 'left', color: 'white' }}>
                {DAYS.map((day) => (
                  <div className='row gx-0' style={{ height: '25px', margin: 0, color: 'white' }}>
                    <p className='col px-0'>{day}</p>
                    <p className="col px-0">9:30AM - 6:30PM</p>
                  </div>
                ))}
              </small>
            </div>
          </div>
        </div>
        <div className="map-container col">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7371.222524753261!2d88.39585462514516!3d22.518763817279584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02778dff4f67bf%3A0xfcc52416a62709e8!2sCrysta%20IVF!5e0!3m2!1sen!2sin!4v1691240294386!5m2!1sen!2sin"
              title="Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
