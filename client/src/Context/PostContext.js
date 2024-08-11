import React, { createContext, useContext, useState } from "react";
import { BashURL } from "../Constant/BashURL";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);
  const [singlePost, setSinglePost] = useState(null);
  const { user } = useUser();
  const [commentLoading, setCommentLoading] = useState(true);

  const [commentsData, setCommentsData] = useState(null);

  const navigate = useNavigate();

  const createPost = async (question) => {
    setPostLoading(true);
    const response = await fetch(`${BashURL}/post/createPost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });
    const data = await response.json();
    console.log(data);
    navigate("/");
    setPostLoading(false);
  };

  const getpostById = async (id) => {
    setPostLoading(true);
    const response = await fetch(`${BashURL}/post/getPostById/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setSinglePost(data.data);

    setPostLoading(false);
  };

  const createCommnet = async (commentMsg) => {
    setPostLoading(true);
    const comment = {
      userId: user._id,
      postId: singlePost._id,
      commentMsg: commentMsg,
    };
    const response = await fetch(`${BashURL}/post/addComment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const data = await response.json();
    setPostLoading(false);
  };

  const getAllComments = async (postId) => {
    setCommentLoading(true);

    const response = await fetch(`${BashURL}/post/getAllComments/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setCommentsData(data.data);
    setCommentLoading(false);
  };

  const addLikeInComment = async (commentId) => {
    setPostLoading(true);
    const comment = {
      userId: user._id,
      commentId: commentId,
    };
    const response = await fetch(`${BashURL}/post/addLikeInComment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    setPostLoading(false);
  };

  return (
    <PostContext.Provider
      value={{
        post,
        setPost,
        postLoading,
        setPostLoading,
        createPost,
        getpostById,
        singlePost,
        createCommnet,
        commentsData,
        getAllComments,
        commentLoading,
        addLikeInComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  return useContext(PostContext);
}
