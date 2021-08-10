import React, { Component } from 'react'
import './styles.css'

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper">

        <div className="headerthing">
          <div className="headerimgwrapper">
            <img className="headerimg" src='images/placeholder200.png'/>
          </div>
          <div className="headertext"><h1>Welcome to my WEBsite!</h1></div>
          <div className="headerimgwrapper">
            <img className="headerimg" src='images/placeholder200.png'/>
          </div>
        </div>
        This is the Home page
      </div>
    )
  }
}
