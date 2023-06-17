const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function Footer() {
  return (
    <div id='contact'>
      <div className="footer-container">
        <h4 className="mb-4 text-muted">
          <b>CONTACT US</b>
        </h4>
      </div>
      <div className="row">
        <div className="contact-container col-12 col-lg-4">
          <div className="vstack gap-4">
            <div className="d-flex flex-column align-items-left justify-content-center px-4">
              <h5 style={{ textAlign: 'justify', color: 'white' }}>Address:</h5>
              <small style={{ textAlign: 'left', color: 'white' }}>
                3rd Floor, Sree Shyam Market, Grand Trunk Rd, South Howrah, West Bengal 711101
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
                    <p className="col px-0">9AM - 4PM</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5270.891872054329!2d88.32886103619495!3d22.579856938214128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02791a78e6f5cb%3A0xede7b4d0da76104d!2sNova%20IVF%20Fertility%20Center%20-%20Best%20IVF%20Centre%20in%20Howrah!5e0!3m2!1sen!2sin!4v1686406869580!5m2!1sen!2sin"
              title="Map"
              // width="700"
              // height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
