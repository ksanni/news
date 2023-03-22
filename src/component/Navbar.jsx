import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
const Navbar = () => {

     

    return (
        <>
            <nav className="navbar navbar-expand-lg p-3 backgd">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light bg-dark icon" to="#" style={{borderStyle:"outset", fontSize:'28px'}}>World's_News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-light active" aria-current="page">Top</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/science' className="nav-link text-light">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/technology' className="nav-link text-light">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/sports' className="nav-link text-light">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/entertainment' className="nav-link text-light">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/politics' className="nav-link text-light">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/health' className="nav-link text-light">Health</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/food' className="nav-link text-light">Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/environment' className="nav-link text-light">Environment</Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hindi-News
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item hover-dark" to="/hi-science">विज्ञान</Link></li>
                                    <li><Link className="dropdown-item" to="hi-technology">तकनीकी</Link></li>
                                    <li><Link className="dropdown-item" to="hi-sports">खेल</Link></li>
                                    <li><Link className="dropdown-item" to="hi-entertainment">मनोरंजन</Link></li>
                                    <li><Link className="dropdown-item" to="hi-politics">राजनीति</Link></li>
                                    <li><Link className="dropdown-item" to="hi-health">स्वास्थ</Link></li>
                                    {/* <li><Link className="dropdown-item" to="hi-food">खाद्य पदार्थ</Link></li>
                                    <li><Link className="dropdown-item" to="hi-environment">पर्यावरण</Link></li>
                                     */}
                                </ul>
                            </li>

                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
