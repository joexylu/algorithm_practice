import React, { Component } from "react";
import "./index.css";

export default class CustomerList extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: [],
      inputValue: ""
    }
    this.addName = this.addName.bind(this);
    this.updateInput = this.updateInput.bind(this)

  }

  updateInput(type){
    return(e)=>{
      this.setState({[type]: e.target.value})
    }
  }

  addName(e){
    e.preventDefault()
    var name = this.state.inputValue;
    var arr = this.state.list;
    if (name !== ""){
      arr.push(name);
      this.setState({list: arr})
    }
  }

  render() {
    return (
      <div className="mt-75 layout-column justify-content-center align-items-center">
        <section className="layout-row align-items-center justify-content-center">
          <input value={this.state.inputValue} onChange={this.updateInput("inputValue")} type="text" className="large" placeholder="Name" data-testid="app-input"/>
          <button onClick={this.addName} type="submit" className="ml-30" data-testid="submit-button">Add Customer</button>
        </section>

        <ul className="styled mt-50" data-testid="customer-list">
          {this.state && this.state.list.map((obj, index) => {
            return <li className="slide-up-fade-in" data-testid={`list-item${index}`} key={`list-item${index}`}>
              {obj}
            </li>
          })}
        </ul>
      </div>
    );
  }
}