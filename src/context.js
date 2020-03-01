import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "sachin singh",
        email: "rajeshsachin786@gmail.com",
        phone: "9834573812"
      },
      {
        id: 2,
        name: "vipin singh",
        email: "sachin.antino@lonaride.com",
        phone: "88890938783"
      },
      {
        id: 3,
        name: "rahul singh",
        email: "rahul.antino@gmail.com",
        phone: "80048573812"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
