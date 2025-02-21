import { Outlet } from "react-router";
import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";

const Main = () => {
    return (
        <div className="font-Poppins min-h-screen flex flex-col dark:bg-zinc-600">
            <Navbar />

            {/* Ensures Outlet takes up all available space */}
            <div className="flex-grow">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Main;
