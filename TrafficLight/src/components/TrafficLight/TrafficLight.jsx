import { useEffect, useState } from "react";

const TRAFFIC_LIGHTS = {
  green: "green",
  red: "red",
  yellow: "yellow",
};
const TrafficLight = () => {
  const [active, setActive] = useState(TRAFFIC_LIGHTS.yellow);
  useEffect(() => {
    switch (active) {
      case TRAFFIC_LIGHTS.red:
        setTimeout(() => {
          setActive(TRAFFIC_LIGHTS.yellow);
        }, 4000);
        break;
      case TRAFFIC_LIGHTS.yellow:
        setTimeout(() => {
          setActive(TRAFFIC_LIGHTS.green);
        }, 500);
        break;
      case TRAFFIC_LIGHTS.green:
        setTimeout(() => {
          setActive(TRAFFIC_LIGHTS.red);
        }, 3000);
    }
  }, [active]);

  return (
    <div>
      <h1>Traffic Light</h1>
      <div className="wrapper">
        <div
          className="green light"
          style={active !== "green" ? { opacity: 0.5 } : null}
        ></div>
        <div
          className="yellow light"
          style={active !== "yellow" ? { opacity: 0.5 } : null}
        ></div>
        <div
          className="red light"
          style={active !== "red" ? { opacity: 0.5 } : null}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
