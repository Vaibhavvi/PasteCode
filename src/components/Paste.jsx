import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Resetpaste } from "../redux/pasteSlice";


const Paste = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(Resetpaste()); // Dispatch the action to reset pastes
  };

  const pastes = useSelector(state => state.paste.pastes); // Select pastes from the Redux store

  return (
    <div style={{ padding: '15px', backgroundColor: 'gray', margin: '20px', borderRadius: '4px' }}>
      <h3>Your past Paste ...</h3>
      <li className="nav-item">
        <button className="btn btn-danger" onClick={handleReset}>
          Reset All
        </button>
      </li>
      <br />
      <ul className="list-group">
        {pastes.length > 0 ? (
          pastes.map(paste => (
            <li key={paste.id} className="list-group-item">
              <h5>{paste.title}</h5>
              <p>{paste.content.slice(0, 100)}...</p>
              <Link to={`/paste/${paste.id}`} className="btn btn-info btn-sm">
                View and update paste
              </Link>
            </li>
          ))
        ) : (
          <p>No pastes available.</p>
        )}
      </ul>
    </div>
  );
};

export default Paste;
