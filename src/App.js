import React, { Component } from "react";
import Header from "./components/layout/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact-Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
