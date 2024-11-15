
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function MainLayout() {

  return (
    <div className="bg-gray-100">

        <Navbar></Navbar>
        <div  className="min-h-[calc(100vh-388px)]">
        <Outlet></Outlet>
        </div>
        
        <Footer></Footer>
    </div>
    
  )
}
