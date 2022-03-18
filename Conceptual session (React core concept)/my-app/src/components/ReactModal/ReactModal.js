import {Button, Modal} from 'react-bootstrap';
import React, {useState} from 'react';

const ReactModal = ({product}) => {
    // console.log(product)
    const {title, image, description, price, category, rating} = product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
      <Button variant="info" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

        <img src={image} className="img-fluid w-50 h-25" alt="" />
        <Modal.Title className='mx-3 w-25'><span className='text-info'>{title}</span></Modal.Title>
        </Modal.Header>
    
        <Modal.Body>{description.slice(0, 250)}
        <h4 className=' mt-2 '><span className='text-danger fw-bold'>Category:</span>  {category}</h4>
        
        <div>
            <h1><span className='text-primary fw-bold'>Price:</span> {price}</h1>

            <h3>Rating:</h3>
            <p className='text-warning'>
            <span>Rate: {rating.rate}</span><br />
            <span>Count: {rating.count}</span>
            </p>
        </div>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default ReactModal;