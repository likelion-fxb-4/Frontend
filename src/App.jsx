import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import FreeBoardPage from "./pages/freeBoardPage";
import CommentPage from "./pages/CommentPage";
import WriterPage from "./pages/writerPage";
import SecretPage from "./pages/SecretPage";
import SecretwriterPage from "./pages/SecretwriterPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/FreeBoardPage" element={<FreeBoardPage />} /> {/* 추가 */}
          <Route path="/comment/:id" element={<CommentPage />} />
          <Route path="/WriterPage" element={<WriterPage />} />
          <Route path="/SecretPage" element={<SecretPage />} />
          <Route path="/SecretwriterPage" element={<SecretwriterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}