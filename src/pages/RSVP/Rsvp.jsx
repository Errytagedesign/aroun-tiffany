import React from 'react';
import Swal from 'sweetalert2';
// import emailjs from "@emailjs/browser";
import { useForm, ValidationError } from '@formspree/react';
import './Rsvp.scss';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Rsvp() {
  // const [validated, setValidated] = useState(false);
  // const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const [state, handleSubmit] = useForm('xayzgrqq');
  if (state.succeeded) {
    // setLoading(true);
    Toast.fire({
      icon: 'success',
      title: 'RSVP form submitted successfully',
    });

    window.location.replace('/');
  }

  return (
    <div className='rsvp d-flex flex-column justify-content-center align-items-center '>
      <section className='hero d-flex justify-content-center align-items-center col-12'>
        <div className='title-container col-12 '>
          {/* <h2 className="title"> August 1st, 2023</h2> */}

          <svg width='100%' height='100%'>
            <text x='50%' y='60%' text-anchor='middle' className='title'>
              RSVP
            </text>
          </svg>
        </div>
      </section>
      <section className='form col-8 text-start'>
        <div className='text-center mb-4'>
          <h2> WE’RE SO EXCITED TO CELEBRATE WITH YOU! </h2>
          <h4>
            {' '}
            Kindly respond with your First and Last name along with the first
            and last name of guest you are attending with.
            <br />
            <br />
            Please be sure to include each guest’s entree + Side selection.{' '}
            <br />
            <br />
            List food restrictions/allergies next to guest name.
            <br /> <br /> RSVP BY 9/9/2023.
          </h4>
        </div>
        <Form
          // ref={formRef}
          // noValidate
          // validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name='email'
              type='email'
              placeholder='Enter email'
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </Form.Group>

          <Row>
            <Form.Label>Name </Form.Label>
            <Col>
              <Form.Control
                required
                name='First Name'
                type='text'
                placeholder='First Name'
                className='mb-3'
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </Col>
            <Col>
              <Form.Control
                required
                name='Last Name'
                type='text'
                placeholder='Last Name'
                className='mb-3'
              />
            </Col>
          </Row>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Are you attending? </Form.Label>
            <Form.Control
              required
              as='textarea'
              name='Attending'
              rows={3}
            />{' '}
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Who else is coming with you? </Form.Label>
            <Form.Control
              required
              as='textarea'
              name='Coming With'
              rows={3}
            />{' '}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>ENTREES </Form.Label>
            <Form.Select aria-label='Default select example'>
              <option>Select Entries</option>

              <option value='an seared chicken Breast, Honey Apple Gastrique  '>
                Pan seared chicken Breast, Honey Apple Gastrique
              </option>
              <option value='Roasted Salmon, Orange Thyme Butter'>
                Roasted Salmon, Orange Thyme Butter
              </option>
              <option value='Boneless Beef Short Ribs Red Wine reduction'>
                Boneless Beef Short Ribs Red Wine reduction
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>SIDES </Form.Label>
            <Form.Select aria-label='Default select example'>
              <option>Select Sides</option>
              <option value='Garlic Broccolini '>Garlic Broccolini</option>
              <option value='Tuscan Fingerling Potatoes'>
                Tuscan Fingerling Potatoes
              </option>
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Message </Form.Label>
            <Form.Control required as='textarea' name='Message' rows={3} />{' '}
          </Form.Group>

          <Button
            type='submit'
            className='col-12 main-btn mt-5'
            disabled={state.submitting}
          >
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default Rsvp;
