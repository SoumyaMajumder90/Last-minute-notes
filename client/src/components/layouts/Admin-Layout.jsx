import { NavLink, Outlet, Navigate } from "react-router-dom"
import { FaUserShield } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FcServices } from "react-icons/fc";
import { IoHomeOutline } from "react-icons/io5";
import { useAuth } from "../../store/auth";

export const AdminLayout = () =>{
    const user = useAuth();

    if(!user.isAdmin){

        return <Navigate to = "/"/>

    }

    console.log("admin layout", user);
    return <>
    <header>
    <div className="container">

        <nav>

            <ul>

                <li> <NavLink to ="/admin/users"><FaUserShield />Users</NavLink></li>
                <li><MdMessage />contacts</li>
                <li><FcServices />services</li>
                <li><IoHomeOutline />Home</li>
            </ul>
        </nav>

    </div>

    </header>
    <Outlet /> 
    {/* outlets plays with sub route. rioute under route*/}
    
    </>

}