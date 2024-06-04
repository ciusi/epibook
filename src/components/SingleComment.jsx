// src/components/SingleComment.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Text>{comment.comment}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Rating: {comment.rate}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default SingleComment;
