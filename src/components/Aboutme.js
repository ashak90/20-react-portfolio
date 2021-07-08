import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import headshot from '../images/headshot.jpeg'
import '../style/index.css'

export default function About() {

    return (
        <section class="heroImg" id="aboutMe">

            <div class="content">
                <img src={headshot} alt="Asha Kumar" className="headshot" />
                <h2> Hi there, I’m Asha!</h2>
                <p>
                    I’m a Developer, paassionate about making the digital world easy for everyone to use.
                </p>
                <p>
                    Currently, I am completing the Full Stack Coding Bootcamp through Georgia Tech.
                </p>
            </div>

            <div class="icons">
                <a href="mailto:ashakumar90@gmail.com"><img src="https://img.icons8.com/ios/60/000000/gmail--v1.png"
                    class="glyph" alt="email icon"/> </a>
                <a href="https://www.linkedin.com/in/asha-k/" rel="noreferrer" target="_blank" > <img
                    src="https://img.icons8.com/ios-filled/50/000000/linkedin-2--v1.png" class="glyph" alt="linkedIn Icon"/> </a>

            </div>
        </section>
    )

}