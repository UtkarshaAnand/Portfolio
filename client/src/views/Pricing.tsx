const PricingDetails = [
  {
    header: 'Ovulation Induction',
    min: '1,000',
    max: '3,000',
  },
  {
    header: 'IUI',
    text: 'Intra Uterine Insemination',
    min: '7,500',
    max: '10,000',
  },
  {
    header: 'IVF',
    text: 'In Vitro Fertilisation',
    min: '1,33,000',
    max: '1,50,000',
  },
  {
    header: 'ICSI',
    text: 'Intra Cytoplasmic Sperm Insemination',
    min: '1,33,000',
    max: '1,50,000',
  },
];

function Pricing() {
  return (
      <div className="pricing-container container" id="pricing">
        <h4 className="mb-4 text-muted">
          <b>PRICING</b>
        </h4>
        <div className="pricing-content row justify-content-evenly">
          {PricingDetails.map((details, idx) => (
            <div className='col-12 col-lg-3' key={idx}>
              <div className="pricing-card card">
                  <b className='pricing-header card-header'>{details.header}</b>
                <div className='card-body'>
                  <div className="mb-2 text-muted card-subtitle">{details.text}</div>
                  <div className='card-text'>
                    &#8377; {details.min} - &#8377; {details.max}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Pricing;
