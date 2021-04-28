import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm2-3H8a1 1 0 0 1 0-2h1V8a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2zm4 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /></svg>);