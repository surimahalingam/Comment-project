import React, { useState } from 'react';
import { BiSend } from "react-icons/bi";
import { Button } from '@progress/kendo-react-buttons';

const CommentForm = ({
      handleSubmit,
      initialText = "",
}) => {
      const [text, setText] = useState(initialText);
      const isTextareaDisabled = text.length === 0;
      const onSubmit = (event) => {
            event.preventDefault();
            handleSubmit(text);
            setText("");
      };
      
      return (
            <form onSubmit={onSubmit}>
                  <div className='row'>
                        <div className='col-10'>
                              <textarea
                                    className="comment-form-textarea"
                                    placeholder='Write comment here'
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                              />
                        </div>
                        <div className='col-sm comment-btn'>
                              <Button primary={true} className="comment-form-button" disabled={isTextareaDisabled}>
                                    <BiSend size='23' />
                              </Button>
                        </div>
                  </div>
            </form>
      );
};

export default CommentForm;