import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("this.state..", this.state)
    // fetch("",{
    //   method:"POST",
    //   type:"application/json",
    //   body:JSON(this.state)
    // })

    fetch('/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({ date :this.state })
     });
  }


  render() {

    const { name, email, subject, message } = this.state;

    return (
      <div>
        <Header/>
      
      <div className="container mb-5"style={{paddingTop:"70px"}}>
        <h1>Contact Us</h1>
        <p><b><i>Just send us your questions or concerns by writing a mail/message and we will give you the help you need.</i></b></p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.781272097039!2d80.09608641452782!3d13.176186590721876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d82ff11a9cf%3A0x3304dc9aed0f444a!2sVel%20Tech%20Rangarajan%20Dr.Sagunthala%20R%26D%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1619518190914!5m2!1sen!2sin"
          width="100%" height="450" frameBorder="0" allowFullScreen></iframe>

        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" value={name} className="form-control" onChange={this.handleInputChange.bind(this)} id="name" placeholder="Enter name" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" value={email} onChange={this.handleInputChange.bind(this)} className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject:</label>
            <input type="text" value={subject} onChange={this.handleInputChange.bind(this)} className="form-control" id="subject" placeholder="Enter subject" name="subject" />
          </div>
          <div className="mb-3">
            <label htmlFor="message">Message:</label>
            <textarea className="form-control" value={message} onChange={this.handleInputChange.bind(this)} rows="5" id="message" name="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        <div className="row mt-3">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h4>Contact</h4>
                <p>Email: test@gmail.com</p>
                <p>Phone. +91 9876543210</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h4>Find us in</h4>
                <p>Address</p>
              </div>
            </div>

          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h4>Social networks</h4>
                <i className="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;
                <i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;&nbsp;
                <i className="fa fa-instagram" aria-hidden="true"></i>&nbsp;&nbsp;
                <i className="fa fa-pinterest-p" aria-hidden="true"></i>&nbsp;&nbsp;
                <i className="fa fa-dribbble" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Contact 