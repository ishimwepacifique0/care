import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <section className="bg-blue-950 text-white">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
