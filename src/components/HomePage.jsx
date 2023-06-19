import React from 'react'
import "./HomePage.css"
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MainContent from './MainContent'
// import DragList from './DragList'

function HomePage() {
    return (
        <div className="parent-container">
            <div className="MainContainer">
                <Sidebar/>
                <div className='sideSection'>
                <Navbar/>
                <MainContent/>
                 {/* <DragList/> */}
                </div>
            </div>
        </div>
    )
}

export default HomePage