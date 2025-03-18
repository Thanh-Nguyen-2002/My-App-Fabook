import React from "react";
import Header from "../../components/fabook/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div
        style={{
            display : 'flex',
            flexDirection : 'column',
            height: '100vh'
        }}
        >   
            <Header />
            <main><Outlet /></main>
        </div>
    );
};

export default Layout;