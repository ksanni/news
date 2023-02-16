import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-3 backgd">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" href="#">Word <span style={{fontSize:'18px'}}>News</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-light active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/science' className="nav-link text-light" href="#">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/technology' className="nav-link text-light" href="#">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/sports' className="nav-link text-light" href="#">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/entertainment' className="nav-link text-light" href="#">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/politics' className="nav-link text-light" href="#">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/education' className="nav-link text-light" href="#">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/crime' className="nav-link text-light" href="#">Crime</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/jokes' className="nav-link text-light" href="#">Jokes</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-light bg-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
