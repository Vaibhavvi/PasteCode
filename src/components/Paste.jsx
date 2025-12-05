import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Resetpaste } from "../redux/pasteSlice";
import "./Paste.css"; // We'll create this CSS

const Paste = () => {
  const dispatch = useDispatch();
  const pastes = useSelector(state => state.paste.pastes);

  const handleReset = () => {
    dispatch(Resetpaste());
  };

  return (
    <div className="paste-container">
      <div className="paste-header">
        <h3>Your Past Pastes</h3>
        <button className="btn-reset" onClick={handleReset}>
          Reset All
        </button>
      </div>

      {pastes.length > 0 ? (
        <div className="paste-list">
          {pastes.map(paste => (
            <div key={paste.id} className="glass-card-paste">
              <h5 className="paste-title">{paste.title}</h5>
              <p className="paste-content">{paste.content.slice(0, 150)}...</p>
              <Link to={`/paste/${paste.id}`} className="btn-view">
                View & Update
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-paste">No pastes available.</p>
      )}
    </div>
  );
};

export default Paste;
