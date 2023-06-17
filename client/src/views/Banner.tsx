import { useState, useCallback } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

function Banner() {
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<ContactFormInput>();

  const handleFormSubmit = useCallback((input: ContactFormInput) => {
    setShowModal(false)
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [])

  const handleOpen = useCallback(() => {
    setShowModal(true);
  }, [])

  return (
    <>
    <Modal show={showModal} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Write your query</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <FloatingLabel
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    isInvalid={!!errors.name}
                    {...register('name', { required: 'Name is Required' })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <FloatingLabel
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="Email" isInvalid={!!errors.email} required {...register('email', { required: 'Email is Required', pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/ })}/>
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <FloatingLabel
                  label="Message"
                  className="mb-3"
                >
                  <Form.Control as="textarea" placeholder="Write your message" isInvalid={!!errors.message} rows={5} required style={{ height: 100 }} {...register('message', { required: 'Message is Required' })}/>
                  <Form.Control.Feedback type="invalid">
                    {errors.message?.message}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" disabled={isSubmitting}>Submit form</Button>
          </Modal.Footer>
        </Form>        
      </Modal>
    <div className="main-container">
      <div className="row">
        <div className="img-container col-12 col-lg-6">
          <img src="./dp.jpeg" alt="" style={{ maxWidth: '100%' }} />
        </div>
        <div className="title-container d-flex flex-column align-items-center justify-content-center col-12 col-lg-6 px-4">
          <h1 className="h1-title display-2"><strong>Dr. Sugata Mishra</strong></h1>
          <h5 className="h5-content lead">
            M.B.B.S, M.S., D.N.B (OBS & GYNAE),
            <br />
            Fellowship in Reproductive Medicine
          </h5>
          <button className="btn btn-light" onClick={handleOpen}>Contact</button>
        </div>
      </div>
    </div>
  </>
  );
}

export default Banner;
