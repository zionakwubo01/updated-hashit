import { RouterProvider } from "react-router-dom";
import MainRouter from "../src/Router/MainRouter"
function App() {
  return (
<div>
<RouterProvider router = {MainRouter} />
</div>
  );
}

export default App;