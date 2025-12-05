import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Updatepaste, Removefrompaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import './ViewPaste.css';

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

  if (!paste) return <p className="loading-text">Loading...</p>;

  return (
    <div className="viewpaste-container">
      <div className="glass-card-view">
        <h2>{isEditing ? 'Edit Paste' : 'View Paste'}</h2>

        <div className="mb-3">
          {isEditing ? (
            <input
              type="text"
              className="modern-input-view"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              placeholder="Enter title"
            />
          ) : (
            <h4 className="paste-title-view">{paste.title}</h4>
          )}
        </div>

        <div className="mb-3">
          {isEditing ? (
            <textarea
              className="modern-input-view"
              rows="6"
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
              placeholder="Enter content"
            />
          ) : (
            <p className="paste-content-view">{paste.content}</p>
          )}
        </div>

        <div className="button-group-view">
          {isEditing ? (
            <>
              <button className="btn-save" onClick={handleUpdate}>💾 Save Changes</button>
              <button className="btn-cancel" onClick={() => setIsEditing(false)}>✖ Cancel</button>
            </>
          ) : (
            <>
              <button className="btn-edit" onClick={() => setIsEditing(true)}>✏ Update Paste</button>
              <button className="btn-delete" onClick={handleDelete}>🗑 Delete Paste</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
