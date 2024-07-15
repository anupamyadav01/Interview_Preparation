import PropTypes from "prop-types";
import { useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const Navigation = ({ data }) => {
  const [locations, setLocations] = useState(data);
  const handleMoveUp = (index) => {
    if (index === locations.length - 1) return;
    const newItems = [...locations];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;
    setLocations(newItems);
  };

  const handleMoveDown = (index) => {
    if (index === 0) return;
    const newItems = [...locations];
    const temp = newItems[index];
    newItems[index] = newItems[index + 1];
    newItems[index + 1] = temp;
    setLocations(newItems);
  };
  return (
    <div className="mt-4 ml-10 border-white border w-[400px]">
      {locations.map((item, index) => (
        <div className="text-2xl flex justify-between" key={item}>
          {item}
          <div>
            {index !== 0 && (
              <MdKeyboardDoubleArrowUp
                className="inline cursor-pointer"
                onClick={() => handleMoveUp(index)}
              />
            )}

            {index !== data.length - 1 && (
              <RiArrowDownDoubleLine
                className="inline cursor-pointer"
                onClick={() => handleMoveDown(index)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

Navigation.propTypes = {
  data: PropTypes.array,
};

export default Navigation;
