import React, { useState } from 'react';
import { BiSearch, BiHelpCircle } from "react-icons/bi";
import { BsCalendar2Event, BsReply } from "react-icons/bs";
import { MdOutlineHomeWork, MdLanguage } from "react-icons/md";
import { Button } from '@progress/kendo-react-buttons';
import { AiOutlineContacts, AiOutlineRetweet, AiFillSetting } from "react-icons/ai";
import Comments from "./comments/Comments";
import '@progress/kendo-theme-default/dist/all.css';
import './comments/Home.css'

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [input, setInput] = useState(true);
  const [reply, setReply] = useState(false);
  const [comment, setComment] = useState(false);

  const onImageChange = (event) => {
    let img = event.target.files[0];
    setSelectedImage(URL.createObjectURL(img));
    setInput(false);
    setReply(true);
  }

  const handleReply = () => {
    setComment(true);
  }

  return (
    <div>
      <div className=''>
        <div className='row'>
          <div className='col-sm card text-center bg-light text-warning py-3'>
            <h3 className='headerContent'> Home <MdOutlineHomeWork /> </h3>
          </div>
          <div className='col-sm card text-center bg-light text-danger py-3'>
            <h3 className='headerContent'> Account <AiOutlineContacts /> </h3>
          </div>
          <div className='col-sm card text-center bg-light text-danger py-3'>
            <h3 className='headerContent'> Search <BiSearch /> </h3>
          </div>
          <div className='col-sm card text-center bg-light text-danger py-3'>
            <h3 className='headerContent'> Help <BiHelpCircle /> </h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-2 card  bg-secondary text-white p-4'>

            <h5 className='sideContent'> <BsCalendar2Event /> Events </h5> <br />

            <h5 className='text-warning'> <AiOutlineRetweet /> Tweet </h5> <br />

            <h5><AiFillSetting /> Settings </h5> <br />

            <h5> <MdLanguage /> Language </h5> <br />

          </div>
          <div className='col-sm card' style={{ maxWidth: '50%' }}>
            <img src={selectedImage} />
            <div className='card-body'>
              {input && (
                <input className='post-img' type='file' onChange={onImageChange} />
              )}
            </div>
            {reply && (
              <div className='col-sm main-content bg-light '>
                <Button className='reply-btn' primary={true} onClick={handleReply} >
                  <BsReply size='25' />
                </Button> <br />
                {/* <i class="bi bi-reply-fill" ></i> */}
              </div>
            )}
            <div className='row bg-light'>
              {comment && (
                <Comments
                  commentsUrl="http://localhost:3004/comments"
                  currentUserId="1"
                />
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;