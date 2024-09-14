import React, { useState, useRef, useEffect } from 'react';
import logo from '../pictures/7.jpg'
import Client from '../components/Client';
import toast from 'react-hot-toast';
import Editor from '../components/Editor';

import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from 'react-router-dom';

const Editorpage = () => {

  const [clients, setClients] = useState([
    {SocketId:1,username:'Rakesh'},
    {SocketId:1,username:'John Doe'}
  ]);

  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  const location = useLocation();

  async function copyRoomId() {
    try {
        await navigator.clipboard.writeText(roomId);
        toast.success('Room ID has been copied to your clipboard');
    } catch (err) {
        toast.error('Could not copy the Room ID');
        console.error(err);
    }
}

function leaveRoom() {
    reactNavigator('/');
}

if (!location.state) {
    return <Navigate to="/" />;
}
  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
          <img src={logo} alt="logo-pic" className='logoImage' style={{ width: '100px', height: '100px' }} />
          </div>
          <h3>Connected</h3>
          <div className='clientsList'> 
          {clients.map((client) => (
                  <Client
                      key={client.SocketId}
                      username={client.username}
                  />
          ))}
          </div>

        </div>
        <button className="btn copyBtn" onClick={copyRoomId}>
          Copy ROOM ID
        </button>
        <button className="btn leaveBtn" onClick={leaveRoom}>
          Leave
        </button>
    
      </div>

      <div className='editorWrap'>
      <Editor />
      </div>
      
    </div>
  )
}

export default Editorpage
