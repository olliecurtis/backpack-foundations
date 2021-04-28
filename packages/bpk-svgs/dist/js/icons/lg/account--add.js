import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M9.5 12c1.5 0 3-.8 3-2.378V4.6a1.179 1.179 0 0 0-.608-1.102A5.616 5.616 0 0 0 9.5 3a5.833 5.833 0 0 0-2.428.499A1.13 1.13 0 0 0 6.5 4.568v5.054C6.5 11.199 8 12 9.5 12zm-1-3h2v.028a1 1 0 0 1-2 0zm2 7a6.98 6.98 0 0 0 2.1 5H4.546A2.951 2.951 0 0 1 1.5 18.227v-.996a1.77 1.77 0 0 1 .99-1.634A16.867 16.867 0 0 1 9.472 14q.666 0 1.3.058A7.002 7.002 0 0 0 10.5 16zm7-5a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm3 5a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1z" /></svg>);