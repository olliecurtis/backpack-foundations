import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7 2.92a.883.883 0 0 1 1.157-.87l1.25.447a.918.918 0 0 1 .593.87V5.16A1.797 1.797 0 0 1 8.25 7h-.375A.899.899 0 0 1 7 6.08V2.92zm0 9.76V9a1 1 0 0 1 1-1h.678a1.051 1.051 0 0 1 .988.74c.36 1.102 1.085 2.77 2.234 2.77a5.324 5.324 0 0 1 3.062.586 29.715 29.715 0 0 1 4.609 3.146c1.225 1.17-.483 2.042-1.257 1.672a6.867 6.867 0 0 1-1.186-.742 12.054 12.054 0 0 0-2.586-1.487c-1.257-.557-2.847-.053-3.867.337C8.225 15.958 7 14.436 7 12.68z" /><path d="M6 9a1 1 0 0 0-2 0v3.818a5.815 5.815 0 0 0 1.082 3.319 5.145 5.145 0 0 0 4.362 2.045 6.628 6.628 0 0 0 2.663-.648 1.504 1.504 0 0 1 1.202.068 1.227 1.227 0 0 1 .69 1.216 1.533 1.533 0 0 1-.263.723 1.06 1.06 0 0 1-.958.459h-5a1 1 0 0 0 0 2h5a3.052 3.052 0 0 0 2.597-1.314A3.477 3.477 0 0 0 16 18.818a3.219 3.219 0 0 0-1.81-3.011 3.478 3.478 0 0 0-2.964-.068 4.672 4.672 0 0 1-1.782.443 3.156 3.156 0 0 1-2.75-1.228A3.82 3.82 0 0 1 6 12.818z" /></svg>);