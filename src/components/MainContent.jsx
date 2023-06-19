import React from 'react'
import "./MainContent.css"
import LogoBc from "./images/titleLogobc.svg"
import Logo1 from "./images/titleLogo1.svg"
import Logo21 from "./images/titleLogo2.1.svg"
import Logo22 from "./images/titleLogo2.2.svg"
import invites from './images/invite.svg'
import {CiCalendarDate} from "react-icons/ci";
import filterLogo from "./images/filterLogo.svg"
import arrow from "./images/filterArrow.svg"
import share from "./images/share.svg"
import DragList from './DragList'

function MainContent() {
    return (

        <section className="MainContaint">
            <header className="AppTitle">
                <div className="Title">
                    <h1>Mobile App</h1>
                    <div className="Titlelogo">
                        <div className="TitleLogo1">

                            <img className='LogoBc1' src={LogoBc} alt="" />
                            <img className='Logo1' src={Logo1} alt="" />
                        </div>
                        <div className="TitleLogo2">
                            <img className='LogoBc2' src={LogoBc} alt="" />
                            <img className='Logo2-1' src={Logo21} alt="" />
                            <img  className="Logo2-2" src={Logo22} alt="" />
                        </div>
                    </div>
                </div>
                <div className="invites">
                     <img src={invites} alt="" style={{width:"237px", height:"38px"}} />
                </div>
            </header>
            <div className="subHeader">
                <div className="dropdowns">
                   <div className="filter">
                            <img src={filterLogo} alt="" style={{left:"17.27px", position:"absolute"}}/>
                            <p className='FilterText'>Filter</p>
                            <img src={arrow} alt="" style={{width:"11.56px", height:"5.73px", position:"absolute", left:"88.22px"}}/>
                   </div>
                   <div className="date">
                            <CiCalendarDate style={{width: "18px", height:"18px" ,color:"#787486",left:"17.27px", position:"absolute"}}/>
                            <p className='DateText'>Today</p>
                            <img src={arrow} alt="" style={{width:"11.56px", height:"5.73px", position:"absolute", left:"88.22px"}}/>

                   </div>
                </div>
                <div className="sharebtns">
                        <img src={share} alt="" />
                </div>
            </div>
            <div className="main">
                    <DragList/>   
            </div>

        </section>

    )
}

export default MainContent