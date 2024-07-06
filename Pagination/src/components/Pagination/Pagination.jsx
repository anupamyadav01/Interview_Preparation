import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";
const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [size] = useState(6);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        throw new Error("Error occurred", error);
      }
    };
    fetchData();
  }, []);

  const onClickPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const onClickNext = () => {
    if (currentPage < Math.ceil(posts.length / size) - 1)
      setCurrentPage((prev) => prev + 1);
  };

  const startIndex = currentPage * size;
  const endIndex = size + startIndex;

  return (
    <div className="bg-zinc-200 h-screen flex flex-col">
      <div className=" text-center text-5xl font-bold sticky top-0 text-zinc-200 w-full bg-zinc-400 py-3">
        Pagination
      </div>
      <div className="flex flex-wrap justify-center">
        {posts.slice(startIndex, endIndex).map((item) => {
          return (
            <div
              key={item.id}
              className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="mr-1 text-2xl">{item.id}.</span>
                  {item.title.toUpperCase()}
                </h2>
                <p className="mt-2 text-gray-600">{item.body}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    User ID: {item.userId}
                  </span>
                  <span className="text-sm text-gray-600">
                    Post ID: {item.id}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center gap-3 mt-10 absolute bottom-6">
        <button
          onClick={() => onClickPrev()}
          className="bg-zinc-500 text-white px-3 py-1"
        >
          Previous
        </button>
        <button
          onClick={() => onClickNext()}
          className="bg-zinc-500 text-white px-3 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
