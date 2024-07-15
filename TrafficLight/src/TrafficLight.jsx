import { useEffect, useState } from "react";

const TrafficLight = () => {
  const lights = {
    green: "green",
    red: "red",
    yellow: "yellow",
  };

  const [active, setActive] = useState(lights.red);
  useEffect(() => {
    switch (active) {
      case lights.green:
        setTimeout(() => {
          setActive(lights.yellow);
        }, 4000);
    }
  });

  return (
    <div>
      <div className="wrapper">
        <span
          className="green light"
          style={active !== "green" ? { opacity: 0.5 } : null}
        >
          a
        </span>
        <span
          className="yellow light"
          style={active !== "yellow" ? { opacity: 0.5 } : null}
        >
          b
        </span>
        <span
          className="red light"
          style={active !== "red" ? { opacity: 0.5 } : null}
        >
          c
        </span>
      </div>
    </div>
  );
};

export default TrafficLight;
