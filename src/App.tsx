import { RouterProvider } from "react-router-dom";
import router from "./Navigation/route.config";

const App = () => {
  return (
    <div className="font-face-rb">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
