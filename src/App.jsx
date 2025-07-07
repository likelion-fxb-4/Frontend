import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    name: "홍길동",
    email: "likelion@skuniv.ac.kr",
  });

  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage userInfo={userInfo} setUserInfo={setUserInfo} />}/>
          <Route path="login" element={<LoginPage setUserInfo={setUserInfo} />}/>
        </Route>
      </Routes>
    </Router>
  );
}