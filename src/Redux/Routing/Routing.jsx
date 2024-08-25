import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Error from '../Components/Error/Error'
import Login from '../Components/Login/Login'
import Registration from '../Components/Registration/Registration'
import Upload from '../Components/Upload/Upload'
import ScrollToTop from './ScrollToTop'

const Routing = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default Routing