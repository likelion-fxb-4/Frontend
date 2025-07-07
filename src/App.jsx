import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />}/>
          {/* <Route path="login" element={<LoginPage />}/> */}
        </Route>
      </Routes>
    </Router>
  );
}