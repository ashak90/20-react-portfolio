import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Contact() {

    return (
        <form class="row g-3" id="contact">
            <h3 class="connect"> Let's Connect </h3>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label"> First Name:</label>
                <input type="text" class="form-control" id="inputfName" />

            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Last Name:</label>
                <input type="text" class="form-control" id="inputlName" />
            </div>
            <div class="col-md-6">
                <label for="inputSubject" class="form-label">Subject:</label>
                <input type="text" class="form-control" id="inputSubject" />
            </div>
            <div class="col-md-6">
                <label for="inputAddress" class="form-label">Email:</label>
                <input type="text" class="form-control" id="inputEmailAddress" />
            </div>

            <div class="col-12">
                <label for="inputAddress2" class="form-label"> Comment or Inquiry: </label>
                <textarea class="form-control" id="floatingTextarea"></textarea>
            </div>
            <div class="icons">
                <a href="mailto:ashakumar90@gmail.com"><img src="https://img.icons8.com/ios/60/000000/gmail--v1.png"
                    class="glyph" alt='email link' /> </a>
                <a href="https://www.linkedin.com/in/asha-k/" target="_blank" rel="noreferrer"> <img
                    src="https://img.icons8.com/ios-filled/50/000000/linkedin-2--v1.png" class="glyph" alt='linkin link' /> </a>

                <a href="https://github.com/ashak90" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" class="glyph" alt='github link' /></a>
                <a href="https://twitter.com/ashakdesigns" target="_blank" rel="noreferrer"><img
                    src="https://img.icons8.com/ios-glyphs/60/000000/twitter.png" class="glyph" alt=' twitter link' /> </a>

            </div>
        </form>
    )
}