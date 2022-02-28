import React, { useState } from 'react';
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { createComment as createCommentApi } from "../api";

const Comments = ({ commentsUrl, currentUserId }) => {
      const [backendComments, setBackendComments] = useState([]);
      const [activeComment, setActiveComment] = useState(null);
      const rootComments = backendComments.filter(
            (backendComment) => backendComment.parentId === null
      );

      const getReplies = (commentId) =>
            backendComments
                  .filter((backendComment) => backendComment.parentId === commentId)
                  .sort(
                        (a, b) =>
                              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                  );

      const addComment = (text, parentId) => {
            createCommentApi(text, parentId).then((comment) => {
                  console.log(comment)
                  setBackendComments([comment, ...backendComments]);
                  setActiveComment(null);
            });
      };

      return (
            <div className="comments">
                  <h4 className="comments-title">Comments:</h4>
                  <CommentForm submitLabel="Write" handleSubmit={addComment} />
                  <div className="comments-container">
                        {rootComments.map((rootComment) => (
                              <Comment
                                    key={rootComment.id}
                                    comment={rootComment}
                                    replies={getReplies(rootComment.id)}
                                    activeComment={activeComment}
                                    setActiveComment={setActiveComment}
                                    addComment={addComment}
                                    currentUserId={currentUserId}
                              />
                        ))}
                  </div>
            </div>
      );
};

export default Comments;