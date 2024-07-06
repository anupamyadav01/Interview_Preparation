import { useRef, useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  let interval = useRef(null);

  const handleOnClickStart = () => {
    if (interval.current) return;
    interval.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleOnClickStop = () => {
    setCount(0);
    clearInterval(interval.current);
    interval.current = null;
  };

  const handleOnClickPause = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Count: <span>{count}</span>
        </h1>
        <div className="flex gap-4">
          <button
            onClick={handleOnClickStart}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            Start
          </button>
          <button
            onClick={handleOnClickPause}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Pause
          </button>
          <button
            onClick={handleOnClickStop}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
