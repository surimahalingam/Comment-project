import React from 'react';
import CommentForm from "./CommentForm";

const Comment = ({
      comment,
      replies,
      setActiveComment,
      activeComment,
      addComment,
      parentId = null,
      currentUserId,
}) => {
      const isEditing =
            activeComment &&
            activeComment.id === comment.id &&
            activeComment.type === "editing";
      const isReplying =
            activeComment &&
            activeComment.id === comment.id &&
            activeComment.type === "replying";

      const canReply = Boolean(currentUserId);

      const replyId = parentId ? parentId : comment.id;

      return (
            <div key={comment.id} className="comment">
                  <div className="comment-image-container">
                        <img src="/user-icon.png" />
                  </div>
                  <div className="comment-right-part">
                        <div className="comment-content">

                        </div>
                        {!isEditing && <div className="comment-text"> <h5> {comment.body} </h5> </div>}
                        {isEditing && (
                              <CommentForm
                                    submitLabel="Update"
                                    hasCancelButton
                                    initialText={comment.body}
                                    handleCancel={() => {
                                          setActiveComment(null);
                                    }}
                              />
                        )}
                        <div className="comment-actions">
                              {canReply && (
                                    <div
                                          className="comment-action"
                                          onClick={() =>
                                                setActiveComment({ id: comment.id, type: "replying" })
                                          }
                                    >
                                          Reply
                                    </div>
                              )}
                        </div>

                        {isReplying && (
                              <CommentForm
                                    submitLabel="Reply"
                                    handleSubmit={(text) => addComment(text, replyId)}
                              />
                        )}
                        {replies.length > 0 && (
                              <div className="replies">
                                    {replies.map((reply) => (
                                          <Comment
                                                comment={reply}
                                                key={reply.id}
                                                setActiveComment={setActiveComment}
                                                activeComment={activeComment}
                                                addComment={addComment}
                                                parentId={comment.id}
                                                replies={[]}
                                                currentUserId={currentUserId}
                                          />
                                    ))}
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default Comment;