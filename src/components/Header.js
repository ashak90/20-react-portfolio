import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <h1> Asha Kumar</h1>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/"> About Me</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/work"> Work</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact"> Contact Me </Link>
                            </li>
                            <li class="nav-item">
                                <a href="https://drive.google.com/file/d/1gr6oxmSqLcVBqwRaRyeoPX3OfdGidDPD/view?usp=sharing" target="_blank" rel="noreferrer">Resume </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}