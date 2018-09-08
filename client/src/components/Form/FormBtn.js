//component for form button. only used in search.

import React from "react";

export const FormBtn = props => (
  <button
    className={`button ${props.color}`} 
    {...props}
  >
    {props.children}
  </button>
);