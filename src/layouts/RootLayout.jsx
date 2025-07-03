import { Outlet } from "react-router-dom";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}