import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

const NotAuth = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if(isAuth()) {
            navigate("/todo")
        }
    }, [])

    const isAuth = () => {
        const token = window.localStorage.getItem("token")
        return !!token
    }

    return (
        <Outlet />
    );
};

export default NotAuth;