import React, { useEffect, useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';

const AddComment = ({ asin, onAddComment }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  });
  const [showToast, setShowToast] = useState(false); // Stato per gestire la visualizzazione del Toast

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }));
  }, [asin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer inserisci-qui-il-tuo-token',
        },
      });
      if (response.ok) {
        let data = await response.json();
        onAddComment(data);
        setComment({
          comment: '',
          rate: 1,
          elementId: asin,
        });
        setShowToast(true); // Mostra il Toast
      } else {
        throw new Error('Qualcosa è andato storto');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide style={{ position: 'fixed', top: '20px', right: '20px' }}>
        <Toast.Body>La tua recensione è stata inviata con successo!</Toast.Body>
      </Toast>
    </div>
  );
};

export default AddComment;
