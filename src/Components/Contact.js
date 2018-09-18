import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="eigth columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="par ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row datos">
          <div className="eight columns">
            <div className="widget widget_contact">
              <h4>Email and Phone</h4>
              <p className="address">
                {name}
                <br />
                Email: {email}
                <br />
                <span>Phone: {phone}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
