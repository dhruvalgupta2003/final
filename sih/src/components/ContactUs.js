import React from 'react'
import '../styles/ContactUs.css'

export default function ContactUs() {
    return (
        <>
            <div className="main">
                <div className="getintouch">
                    <div className="mainhead2">
                        <div className="head">Get In Touch</div>
                        <p>We would love to hear from you. Our friendly team is always here to chat</p>
                    </div>
                    <div className="phonediv">
                        <div className="phnicn">
                            <a href="/"><i className="fas fa-phone" style={{ fontSize: '20px', color: 'black' }}></i></a>
                        </div>
                        <p>Phone</p>
                    </div>
                    <div className="emaild">
                        <div className="emicn">
                            <a href="/"><i className="fas fa-envelope-open" style={{ fontSize: '20px', color: 'black' }}></i></a>
                        </div>
                        <p>Email</p>
                    </div>
                    <div className="icons">
                        <a href="/"><i className="icn fa-brands fa-instagram" style={{ fontSize: '30px', color: 'white' }}></i></a>
                        <a href="/"><i className="icn fa-brands fa-facebook" style={{ fontSize: '30px', color: 'white' }}></i></a>
                        <a href="/"><i className="icn fa-brands fa-twitter" style={{ fontSize: '30px', color: 'white' }}></i></a>
                        <a href="/"><i className="icn fas fa-comment-alt" style={{ fontSize: '30px', color: 'white' }}></i></a>
                    </div>
                </div>
                <div className="contactus">
                    <div className="mainhead">
                        <div className="head">Contact Us</div>
                        <p>Any Question or Remarks? Just message us</p>
                    </div>
                    <div className="formdiv">
                        <form action="">
                            <div className="namediv marg">
                                <p>Name</p>
                                <input type="text" id="nameinput" className="allinputs" placeholder="Enter Your Name" />
                            </div>
                            <div className="emaildiv marg">
                                <p>Email</p>
                                <input type="email" name="" id="emailinput" className="allinputs" placeholder="example@gmail.com" />
                            </div>
                            <div className="messagediv marg">
                                <p>Message</p>
                                <textarea name="" id="messageinput" cols="30" rows="10"
                                    placeholder="What's Your Message"></textarea>
                            </div>
                            <a href="/" className="marg sendbtn">Send</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
