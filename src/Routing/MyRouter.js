import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Componets/ComponetsHomePage/Home";
import LoginBlock from "../Componets/ComponetsLoginBlock/LoginBlock";
import UserPage from "../Componets/ComponetsUserPage/UserPage";
import TaskPage from "../Componets/ComponetsTaskPage/TaskPage";
import Project from "../Componets/ComponetsProjectPage/Project";

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={''} element={<Home/>}/>
                <Route path={'login'} element={<LoginBlock/>}/>
                <Route path={'user.com/:id'} element={<UserPage/>}>
                    <Route path={''} element={<Project/>}/>
                    <Route path={'addTask/:taskId'} element={<TaskPage/>}/>
                </Route>
                <Route path={'*'} element={<LoginBlock/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRouter;