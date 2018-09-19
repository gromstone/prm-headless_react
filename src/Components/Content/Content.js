import React from "react";

const Content = (props) => (
  <main className='row'>
    <div className='side'>MENU</div>
    <div className='middle'>CONTENT
      {props.children}
    </div>
  </main>
);

export default Content;
