import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const Welcome = () => {
  const [showToast, setShowToast] = useState(true);

  return (
    <div className="d-flex justify-content-center mt-4">
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={10000} // duration alert
        autohide
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          minWidth: '300px',
          backgroundColor: '#f8f9fa', // color
        }}
      >
        <Toast.Header>
          <img
            src="https://via.placeholder.com/20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Benvenuti in Epibook</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>
          <p className="mb-0">
            Benvenuti su <strong>Epibook</strong>! <br />
            Esplora la nostra collezione, cerca il tuo preferito e aggiungi recensioni.
            <br />
            Buona lettura!
          </p>
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default Welcome;
