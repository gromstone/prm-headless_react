import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Aux from '../../hoc/aux'

import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";

import Home from  "../../Components/HomeView/HomeView";
//import About from  "../../Components/Author/Author";
import Blog from  "../../Components/BlogView/BlogView";
import Post from  "../../Components/Post/Post";

import '../../scss/index.scss'

class Layout extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Aux>
          <Header />
          <Content>
            <Route exact path='/' component={Home} />
            {/*
              <Route path='/about' component={About} />
            */}
            <Route path='/blog' component={Blog} />
            <Route path='/post/:slug' component={Post} />
          </Content>
          <Footer />
        </Aux>
      </Router>
    );
  }
}

export default Layout;
