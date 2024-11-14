import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Updatepaste, Removefrompaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const ViewPaste = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paste, setPaste] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');

  useEffect(() => {
    const storedPastes = JSON.parse(localStorage.getItem('pastes')) || [];
    const currentPaste = storedPastes.find(p => p.id === id);
    if (currentPaste) {
      setPaste(currentPaste);
      setUpdatedTitle(currentPaste.title);
      setUpdatedContent(currentPaste.content);
    }
  }, [id]);

  const handleUpdate = () => {
    if (!updatedTitle || !updatedContent) {
      toast.error('Title and content cannot be empty');
      return;
    }

    const updatedPaste = { id, title: updatedTitle, content: updatedContent, createdAt: new Date().toISOString() };
    dispatch(Updatepaste({ id, newPaste: updatedPaste }));
    navigate('/');
  };

  const handleDelete = () => {
    dispatch(Removefrompaste(id));
    navigate('/');
  };

  if (!paste) return <p>Loading...</p>;

  return (
    <div className="container mt-4" style={{padding:'15px',borderRadius:'4px',backgroundColor:'gray', margin:'20px'}}>
      <h2>{isEditing ? 'Edit Paste' : 'View Paste'}</h2>
      <div className="mb-3">
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        ) : (
          <h4>{paste.title}</h4>
        )}
      </div>
      <div className="mb-3">
        {isEditing ? (
          <textarea
            className="form-control"
            rows="6"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
        ) : (
          <p>{paste.content}</p>
        )}
      </div>

      {isEditing ? (
        <div>
          <button className="btn btn-success" onClick={handleUpdate}>Save Changes</button>
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <button className="btn btn-info " onClick={() => setIsEditing(true)}>Update Paste</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete Paste</button>
        </div>
      )}
    </div>
  );
};

export default ViewPaste;
