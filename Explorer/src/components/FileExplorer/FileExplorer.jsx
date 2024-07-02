import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const FileExplorer = ({ data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <p
        onClick={() => setExpand((prev) => !prev)}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        {data.isFolder ? (
          expand ? (
            <AiFillCaretDown />
          ) : (
            <AiFillCaretRight />
          )
        ) : null}
        {data.name}
      </p>
      <div style={expand ? { display: "block" } : { display: "none" }}>
        {data.isFolder &&
          data.items.map((item, index) => {
            return (
              <div
                style={{
                  marginLeft: "30px",
                }}
                key={index}
              >
                <FileExplorer key={item.name} data={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

FileExplorer.propTypes = {
  data: PropTypes.object,
};

export default FileExplorer;
