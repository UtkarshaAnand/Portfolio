import {  Nav, Navbar as BootstrapNavbar} from 'react-bootstrap';

function Navbar() {
  return (
      <BootstrapNavbar collapseOnSelect expand="sm" className='top-navbar'>
        <BootstrapNavbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll'></BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id='navbarScroll'>
          <Nav style={{ marginLeft: '20px' }}>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#testimonial">Testimonials</Nav.Link>
            <Nav.Link href="#video">Videos</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
  );
}

export default Navbar;