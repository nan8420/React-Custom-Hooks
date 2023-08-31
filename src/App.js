import {
  Route,
  Link,
  Routes,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Layout from "./Components/Layout";

import Main from "./Pages/Main";
import UseInputPage from "./Pages/UseInputPage";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />

        <Route path="/Main" element={<Main />} />
        <Route path="/UseInputPage" element={<UseInputPage />} />
      </Route>
    </Routes>
  );
}

export default App;
