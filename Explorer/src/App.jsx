import "./App.css";
import data from "../src/constants/data";
import FileExplorer from "./components/FileExplorer/FileExplorer";
const App = () => {
  return (
    <div>
      <FileExplorer data={data} />
    </div>
  );
};

export default App;
