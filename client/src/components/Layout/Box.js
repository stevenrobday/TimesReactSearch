//makes a box!

import React from "react";

export const Box = props => (
  <div className="columns">
    <div className="column is-6 is-offset-3">
      <div className="box">
        {props.children}
      </div>
    </div>
  </div>
);