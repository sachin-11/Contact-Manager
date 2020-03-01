import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="from-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name .."
                value={name}
              />
            </div>
            <div className="from-group">
              <label htmlFor="name">Email</label>
              <input
                name="email"
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Email .."
                value={email}
              />
            </div>
            <div className="from-group">
              <label htmlFor="name">Phone</label>
              <input
                name="phone"
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Phone .."
                value={phone}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
