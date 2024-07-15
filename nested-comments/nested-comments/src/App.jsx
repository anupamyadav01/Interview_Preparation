import { useState } from "react";
import Comments from "./components/Comments/Comments";
import { commentData } from "./Constants/commentsData";
const App = () => {
  const [comments setComments] = useState(commentData);
  return (
    <div className="w-full h-screen bg-zinc-600">
      <Comments key={comments.id} comments={comments}/>
    </div>
  );
};

export default App;
