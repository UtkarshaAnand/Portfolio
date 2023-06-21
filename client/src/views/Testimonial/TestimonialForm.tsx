import React, { useCallback, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import API from '../../api';

interface TestimonialFormInput {
  name: string;
  email: string;
  comment: string;
}

interface TestimonialFormProps {
  viewMore: boolean;
  onSubmit: () => void;
  onViewMore: () => void;
}

export default function TestimonialForm(props: TestimonialFormProps) {
  const { viewMore, onSubmit, onViewMore } = props;
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<TestimonialFormInput>();

  const handleFormSubmit = useCallback((input: TestimonialFormInput) => {
    const { name, email, comment } = input;
    API.Testimonial.Create({
      data: {
        name,
        email,
        comment
      }
    })
    .then(() => {
      setShowModal(false)
      onSubmit();
    })
    .catch((err) => {
      setShowModal(false);
    })
  }, [onSubmit]);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [])

  const handleOpen = useCallback(() => {
    setShowModal(true);
  }, [])

  return (
    <div id="testimonial">
      <div className='text-center'>
        <Button variant="link" onClick={handleOpen} style={{ textDecoration: 'none', width: 'auto' }}>Write a Review</Button>
        {viewMore ? <Button variant="link" onClick={onViewMore} style={{ textDecoration: 'none', width: 'auto' }}>View More</Button> : null}
      </div>
      <Modal show={showModal} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Write a Review</Modal.Title>
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
                  label="Comment"
                  className="mb-3"
                >
                  <Form.Control as="textarea" placeholder="Leave a comment here" isInvalid={!!errors.comment} rows={5} required style={{ height: 100 }} {...register('comment', { required: 'Comment is Required' })}/>
                  <Form.Control.Feedback type="invalid">
                    {errors.comment?.message}
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
    </div>
  )
}
