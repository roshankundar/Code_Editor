
import React, { useState } from 'react'
import logo from '../pictures/7.jpg'
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  const [roomId,setroomId]=useState('');
  const [username, setUsername] = useState('');
  const createNewRoom=(e)=>{
    e.preventDefault();
    const id=uuidv4();
    setroomId(id);
    // console.log(id);
    toast.success('Created a new Room');

  };

  const joinRoom=()=>{
    if(!username || !roomId)
    {
      toast.error('Room ID and username are required');
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
          username,
      },
  });
  }

  const handleInputEnter = (e) => {
    if (e.code === 'Enter') {
        joinRoom();
    }
};
  return (
    <div className='homepageWrapper'>
      <div className='formWrapper'>
      <img src={logo} alt="logo-pic" className='homepagelogo' style={{ width: '100px', height: '100px' }} />
      <h4 className='mainlabel'>Paste Invitation room-Id</h4>
      <div className='inputgroup'>
      <input
          type="text"
          className="inputBox"
          placeholder="ROOM ID"
          onChange={(e) => setroomId(e.target.value)}
          value={roomId}
          onKeyUp={handleInputEnter}
      />
      <input
          type="text"
          className="inputBox"
          placeholder="USERNAME"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          onKeyUp={handleInputEnter}
      />


        <button className='btn joinBtn' onClick={joinRoom}>Join</button>
        <span className='createInfo'>
         If you dont have an invite then create &nbsp;
         <a onClick={createNewRoom} href="" className='createNewBtn'>new room</a>
        </span>
      </div>
      </div>
      <footer>
        <h4> Built with &nbsp;:)</h4>
      </footer>
      
    </div>
  )
}

export default Home
