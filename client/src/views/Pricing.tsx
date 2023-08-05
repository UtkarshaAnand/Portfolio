const PricingDetails = [
  {
    header: 'Donor Embryo',
    min: '2,00,000',
  },
  {
    header: 'IUI',
    min: '30,000',
  },
  {
    header: 'PESA/TESA',
    min: '30,000',
  },
  {
    header: 'IVF ICSI',
    min: '1,50,000',
    max: '1,80,000',
  },
  {
    header: 'Operative Hysteroscopy',
    min: '30,000',
    max: '40,000'
  },
];

function Pricing() {
  return (
      <div className="pricing-container container" id="pricing">
        <h4 className="mb-4 text-muted">
          <b>PRICING</b>
        </h4>
        <div className="pricing-content row g-4">
          {PricingDetails.map((details, idx) => (
            <div className='col-12 col-lg-4' key={idx}>
              <div className="pricing-card card">
                  <b className='pricing-header card-header text-muted'>{details.header}</b>
                <div className='card-body'>
                  <div className='card-text'>
                    <span>&#8377; {details.min}</span>{details.max && <span> - &#8377; {details.max}</span>}
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
