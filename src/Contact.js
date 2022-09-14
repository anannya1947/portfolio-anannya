import React, { Component } from "react";
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div>


                <form>
                    <input type="text" placeholder="Full name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>

                </form>
                <button id="alert-button">Submit</button>
            </div>
        )
    }
}

export default Contact;