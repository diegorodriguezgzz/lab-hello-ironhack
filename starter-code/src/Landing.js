import React, {Component} from "react";
import "./Landing.css";

class Landing extends Component {
  render() {
    return(
      <div className="Landing">
      
    <section id="intro">
    <div className = "awesome">
      <h1>Say Hello to react ReactJS</h1>
      <p>You will learn a Frontend framework from scratch to become a Ninja developer</p>
      <button>Awesome</button>
    </div>
    </section>
    
    <div className = "cards" > 
          <div className = "declarative">
            <img src="./images/icon1.png" alt="" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UI</p>
          </div>
          

          <div className = "components">
          <img src="./images/icon2.png" alt="" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state</p>
          </div>


          <div className = "single-way">
          <img src="./images/icon3.png" alt=""/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components</p>
          </div>


          <div className = "JSX">
          <img src="./images/icon4.png" alt=""/>
            <h2>JSX</h2>
            <p>Statically typed designed to run on modern browsers</p>
          </div>
      </div>




      </div>
    );
  }
}

export default Landing;