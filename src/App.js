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
import UseFetchPage from "./Pages/UseFetchPage";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />

        <Route path="/Main" element={<Main />} />
        <Route path="/UseInputPage" element={<UseInputPage />} />
        <Route path="/UseFetchPage" element={<UseFetchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
