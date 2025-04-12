import { Outlet } from "react-router-dom";
import React from "react";
import ImageNavigation from "../ImageNavigation";
import NavBar from "../NavBar";

const Layout = () => {
    return (
        <>
            <React.StrictMode>
                <ImageNavigation />
                <Outlet />
            </React.StrictMode>
        </>
    )
};

export default Layout;