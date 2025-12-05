import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addpaste } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleAddPaste = () => {
    if (!title || !content) {
      toast.error("Title and Content are required");
      return;
    }

    const paste = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    dispatch(Addpaste(paste));
    setTitle("");
    setContent("");

    toast.success("Paste Created!");
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 px-3">
      <div className="glass-card-2 p-4 w-100" style={{ maxWidth: "650px" }}>
        <h2 className="fw-bold text-center mb-4">Create a New Paste</h2>

        <input
          type="text"
          className="form-control modern-input-2 mb-3"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="10"
          className="form-control modern-input-2 mb-3"
          placeholder="Write your text or code here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="cool-btn w-100 fw-bold py-2" onClick={handleAddPaste}>
          ✨ Create Paste
        </button>
      </div>
    </div>
  );
};

export default Home;
