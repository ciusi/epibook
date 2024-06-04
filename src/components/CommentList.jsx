// src/components/CommentList.jsx
import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ commentsToShow = [] }) => {
  return (
    <div>
      {commentsToShow.map(comment => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
