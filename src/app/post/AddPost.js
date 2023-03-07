import React, { useEffect, useState } from "react";
import { addPost } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && content && userId) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
          userId,
          date: new Date().toISOString(),
        })
      );
      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } else {
      alert("Please fill all the field");
    }
  };

  return (
    <div className="border border-gray-500 p-5">
      <h1 className="text-xl font-bold">Add Post</h1>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col mb-4">
          <label>Title</label>
          <input
            className="border border-black outline-none py-2 px-3 rounded-md"
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Penulis</label>
          <select
            onChange={(e) => setUserId(e.target.value)}
            className="border border-black outline-none py-2 px-3 rounded-md"
          >
            <option>--Pilh Penulis--</option>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.userId}>
                  {user.user}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label>Content</label>
          <textarea
            className="border border-black outline-none py-2 px-3 rounded-md"
            cols="30"
            rows="10"
            type="text"
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white px-3 py-2 rounded-md w-full ">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPost;
