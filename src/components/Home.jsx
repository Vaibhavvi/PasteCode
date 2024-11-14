import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Addpaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  

  const handleAddPaste = () => {
    if (!title || !content) {
      toast.error('Title and Content are required');
      return;
    }

    const paste = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    dispatch(Addpaste(paste));
    setTitle('');
    setContent('');
  };

  return (
    <div className="container mt-4" style={{backgroundColor:'gray',borderRadius:'4px'}}>
      <div className="container-mid"style={{padding:'20px',borderRadius:'4px'}}>
      <h2>Create a New Paste</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new text and code......"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="10"
          placeholder="Enter any text and code......"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddPaste}>Create Paste</button>
      </div>
    </div>
  );
};

export default Home;
