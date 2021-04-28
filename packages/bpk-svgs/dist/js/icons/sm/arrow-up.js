import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M7.463 15.75h9.074a1.358 1.358 0 0 0 1.11-2.251l-4.354-4.77a1.53 1.53 0 0 0-2.184-.04l-4.718 4.77a1.357 1.357 0 0 0 1.072 2.291z" /></svg>);