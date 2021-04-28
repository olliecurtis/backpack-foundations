import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M5.768 2.336a.891.891 0 0 1-.06 1.258q-.033.03-.068.056a8.66 8.66 0 0 0-1.674 1.807A4.786 4.786 0 0 0 3 8.067.969.969 0 0 1 2 9a.969.969 0 0 1-1-.933 6.535 6.535 0 0 1 1.284-3.62 10.56 10.56 0 0 1 2.076-2.23 1.05 1.05 0 0 1 1.408.119zm12.464 0a.891.891 0 0 0 .06 1.258q.033.03.068.056a8.66 8.66 0 0 1 1.674 1.807A4.786 4.786 0 0 1 21 8.067a1.002 1.002 0 0 0 2 0 6.535 6.535 0 0 0-1.284-3.62 10.557 10.557 0 0 0-2.076-2.23 1.05 1.05 0 0 0-1.408.119zM12 3a7 7 0 0 0-7 7v.64a10 10 0 0 1-1.056 4.47l-.497.996A2 2 0 0 0 5.237 19h13.527a2 2 0 0 0 1.789-2.894l-.497-.995A10.001 10.001 0 0 1 19 10.64V10a7 7 0 0 0-7-7zM9.076 20.959c-.265-.485.204-.96.756-.96h4.339c.552 0 1.02.475.755.96a2.297 2.297 0 0 1-1.932 1.04h-2a2.27 2.27 0 0 1-1.918-1.04z" /></svg>);