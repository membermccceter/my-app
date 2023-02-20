import{ Outlet } from"react-router-dom";
import Navbar from "../components/Navbar";

export default function Master() {

    return(
       <>
        <Navbar />
        <Outlet />
       </>
    );

}