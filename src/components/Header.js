import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {

    return (
        <header>
            <h1> Asha Kumar</h1>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#aboutMe">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#myWork">Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"
                                    href="https://drive.google.com/file/d/1gr6oxmSqLcVBqwRaRyeoPX3OfdGidDPD/view?usp=sharing"
                                    target="_blank">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}