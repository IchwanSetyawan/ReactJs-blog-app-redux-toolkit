import React from "react";
import { useSelector } from "react-redux";
import Author from "../../component/Author";
import TimeAgo from "../../component/TimeAgo";

const PostList = () => {
const posts = useSelector(state => state.post);

  return (
      <>
      <h1>Post</h1>
      {posts.length === 0 && <div className="text-center">Tidak ada post</div>}
      {posts.map((post)=> {
          return (
            <div key={post.id} className="flex justify-center items-center ">

                <div  className=" my-4 p-5 transform transition duration-500  hover:scale-105 rounded-md shadow-lg bg-slate-50 w-full">
                    <h2 className="font-semibold text-xl">{post.title}</h2>
                    <TimeAgo timestamp={post?.date}/>
                    <p className="my-4 ">{post.content.substr(0,100)}...</p>
                    <p className="text-sm text-gray-500">
                        ditulis oleh <Author userId={post.userId}/>
                    </p>
                </div>
            </div>
          )

      } 
      )}
      </>
  ) 
};

export default PostList;
