import React, { Component } from "react";

import Aux from '../../hoc/aux'

import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";

import Banner from  "../../Components/Banner/Banner";

class Layout extends Component {
  state = {};

  render() {
    return (
      <Aux>
        <Header />
        <Content>
          <Banner/>
        </Content>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
