import React from "react";

const Content = (props) => (
  <main className='row'>
    <div className='col'>CONTENT
      {props.children}
    </div>
  </main>
);

export default Content;
