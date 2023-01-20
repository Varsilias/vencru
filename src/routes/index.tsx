import { Routes, Route } from "react-router-dom";
import Settings from "../pages/Settings";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Router;
