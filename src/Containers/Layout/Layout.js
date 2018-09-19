import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Aux from '../../hoc/aux'

import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";

import Banner from  "../../Components/Banner/Banner";
import Blog from  "../../Components/BlogView/BlogView";

import '../../scss/index.scss'

class Layout extends Component {
  state = {};

  render() {
    return (
      <Router>
      <Aux>
        <Header />
        <Banner/>
        <Content>
          <Route exact path='/blog' component={Blog} />
          {/*
          <Route exact path='/about' component={About} />
          <Route exact path='/post/:slug' component={Post} />
          */}
        </Content>
        <Footer />
      </Aux>
      </Router>
    );
  }
}

export default Layout;
