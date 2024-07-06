import { useState, useEffect } from "react";
import data from "../constants/data.js";

const Search = () => {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(data);

  useEffect(() => {
    const newData = data.filter((item) => {
      return (
        item.subjectName.toLowerCase().includes(query.toLowerCase()) ||
        item.id.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      );
    });
    setUserData(newData);
  }, [query]);

  return (
    <div className="border border-black p-4">
      <div>
        <input
          type="text"
          className="bg-zinc-300 p-2 mb-4 w-full"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {userData.map((item) => (
          <div className="bg-zinc-200 mb-4 p-4" key={item.id}>
            <h1 className="font-bold">{item.subjectName}</h1>
            <h1>{item.id}</h1>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
