import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



export default function Layout() {
  return (
    <div>
        <Navbar />

        <main>
            <Outlet />
        </main>

        {/* Footer will go here later */}
    </div>
  );
}