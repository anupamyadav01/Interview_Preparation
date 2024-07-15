import { useState } from "react";

const Comments = ({ comments }) => {
  return (
    <div className="flex flex-col">
      <div className="shadow-md m-5 p-3 bg-zinc-400 border-l-4 border-blue-500 rounded">
        <h2 className="font-normal text-xl pl-2 ">{comments.text}</h2>
        <div className="mt-3 ml-2">
          <button className="border border-blue-500 font-medium px-2 py-1 rounded bg-zinc-100 ">
            Reply
          </button>{" "}
          <button className="border border-blue-500 font-medium px-2 py-1 rounded bg-zinc-100 ">
            Delete
          </button>
        </div>
      </div>
      <div>
        {/* {comments?.replies?.map((element) => {
          <Comments key={element.id} commentData={element} />;
        })} */}
      </div>
    </div>
  );
};

export default Comments;
