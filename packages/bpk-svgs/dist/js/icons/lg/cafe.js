import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.494 5.03a.551.551 0 0 1-.5-.53V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2.5a.551.551 0 0 1 .5-.53 4 4 0 0 0 0-7.94zm-.004 5.908a.416.416 0 0 1-.495-.438v-3a.416.416 0 0 1 .495-.438 2 2 0 0 1 0 3.876zM18.995 21a1 1 0 0 1-1 1h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 1 1z" /></svg>);