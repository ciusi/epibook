import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = ({ book, handleBookClick }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = (event) => {
    event.stopPropagation(); // Previene la propagazione del click
    setSelected(!selected);
    handleBookClick(book);
  };

  return (
    <div className={`book ${selected ? 'selected' : ''}`} onClick={toggleSelected}>
      <Card style={{ width: '100%', border: selected ? '2px solid red' : 'none' }}> {/* Imposta la larghezza a 100% */}
        <Card.Img variant="top" src={book.img} style={{ height: '150px', objectFit: 'cover' }} /> {/* Riduci l'altezza dell'immagine */}
        <Card.Body>
          <Card.Title style={{ fontSize: '0.9rem' }}>{book.title}</Card.Title> {/* Riduci la dimensione del titolo */}
        </Card.Body>
      </Card>
      {selected && (
        <div onClick={(e) => e.stopPropagation()}>
          <CommentArea asin={book.asin} />
        </div>
      )}
    </div>
  );
};

export default SingleBook;
