import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WatchSensor from '../images/watchsensor.jpg';
import dayPlanner from '../images/dayPlanner.jpg';
import password from '../images/password.jpg';
import weather from '../images/weather.gif';
import '../style/index.css'

export default function Projects() {
    return (
        <main>
            <h3 id="myWork"> Work </h3>
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="cardContainer col-lg-12 col-md-12 col-sm-12">
                            <div class="card">
                                <img src={WatchSensor} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> Project 1: The Watch Sensor</h5>
                                    <a href="https://ashak90.github.io/project-01/" class="btn btn-primary btn-lg" tabindex="-1"
                                        role="button" target="_blank" rel="noreferrer">Deployed Application </a>
                                    <a href="https://github.com/ashak90/project-01" class="btn btn-primary btn-lg" tabindex="-1"
                                        role="button" target="_blank" rel="noreferrer"> Github Repo </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="cardContainer col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src={dayPlanner} class="card-img-top" alt="..." height="400px" />
                                <div class="card-body">
                                    <h5 class="card-title">Day Planner</h5>
                                    <div class="d-flex flex-column">
                                        <a href="https://ashak90.github.io/05-work-day-scheduler/" class="btn btn-primary btn-md mb-3"
                                            tabindex="-1" role="button" target="_blank" rel="noreferrer">Deployed Application </a>
                                        <a href="https://github.com/ashak90/05-work-day-scheduler" class="btn btn-primary btn-md"
                                            tabindex="-1" role="button" target="_blank" rel="noreferrer">Github Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cardContainer col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src={password} class="card-img-top" alt="..." height="400px" />
                                <div class="card-body">
                                    <h5 class="card-title">Password Generator</h5>
                                    <div class="d-flex flex-column">
                                        <a href="https://ashak90.github.io/Homework-3/" class="btn btn-primary btn-md mb-3" tabindex="-1"
                                            role="button" target="_blank" rel="noreferrer">Deployed Application </a>
                                        <a href="https://ashak90.github.io/Homework-3/" class="btn btn-primary btn-md" tabindex="-1"
                                            role="button" target="_blank" rel="noreferrer"> Github Repo </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cardContainer col-lg-4 col-md-0 col-sm-12">
                            <div class="card">
                                <img src={weather} class="card-img-top" alt="..." height="400px" />
                                <div class="card-body">
                                    <h5 class="card-title">Weather Dashboard</h5>
                                    <div class="d-flex flex-column">
                                        <a href="https://ashak90.github.io/06-weather-dashboard/" class="btn btn-primary btn-md mb-3" tabindex="-1"
                                            role="button" target="_blank" rel="noreferrer">Deployed Application </a>
                                        <a href="https://github.com/ashak90/06-weather-dashboard" class="btn btn-primary btn-md" tabindex="-1"
                                            role="button" target="_blank" rel="noreferrer"> Github Repo </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div class="row">
                        <div class="cardContainer col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src="./assets/images/budget.jpeg" class="card-img-top" alt="..." height="400px" />
                                <div class="card-body">
                                    <h5 class="card-title"> Budget Tracker</h5>
                                    <p class="card-text"> Coming Soon...</p>
                                </div>
                            </div>
                        </div>

                        <div class="cardContainer col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src="./assets/images/noteTaker.jpg" class="card-img-top" alt="..." height="400px" />
                                <div class="card-body">
                                    <h5 class="card-title">Note Taker</h5>
                                    <p class="card-text">Coming Soon...</p>
                                </div>
                            </div>
                        </div>

                        <div class="cardContainer col-lg-4 col-md-0 col-sm-12">
                            <div class="card">
                                <img src="./assets/images/fitnessTracker.jpg" class="card-img-top" alt="..." height="400px" />
                                <div class="card-body">
                                    <h5 class="card-title">Fitness Tracker</h5>
                                    <p class="card-text"> Coming Soon...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )

}