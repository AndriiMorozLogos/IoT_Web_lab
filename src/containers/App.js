import React, { Component } from 'react'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import "./MyApp.css";
export default class App extends Component {
  render() {
    return (
      <div className ="wrapper">
        <Header/>
        <Navigation/>
        <Footer/>
      </div>
    )
  }
}

