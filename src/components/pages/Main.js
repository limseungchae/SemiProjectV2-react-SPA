import React from "react";
import {Route, Routes} from "react-router";
import Home from "./Home";
import Join from "./Join";
import Login from "./Login";
import List from "./List";
import Myinfo from "./Myinfo";
const Main = () => {
    return (
       <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/member/join" element={<Join />}></Route>
           <Route path="/member/login" element={<Login />}></Route>
           <Route path="/board/list" element={<List />}></Route>
           <Route path="/member/myinfo" element={<Myinfo />}></Route>
       </Routes>
    );
}

export default Main;