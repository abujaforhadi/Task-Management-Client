import { Outlet } from "react-router";
import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";



const Main = () => {
    return (
        <div className="font-Poppins  rounded-2xl mx-auto dark:bg-zinc-600   ">
            <Navbar></Navbar>

            <Outlet></Outlet>

            <div className=" ">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;