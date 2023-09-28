import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Authentication from "./component/Authentication";
import Main from "./component/Main";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Authentication />} />
                    <Route path="/login" element={<Authentication />} />
                    <Route path="/home" element={<Main />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
