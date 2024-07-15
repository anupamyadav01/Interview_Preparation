import { useState } from "react";

const demo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(6);

  const onclickprev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const onClickNext = () = {
    if(currentPage < Math.ceil(post.length/ size -1 ))
        setCurrentPage((prev) => prev + 1)
  }

  const startIndex = currentPage * size;
  const endIndex = size * startIndex

  return <div>demo</div>;
};

export default demo;
