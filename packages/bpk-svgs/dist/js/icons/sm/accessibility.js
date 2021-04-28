import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm-.9 4.945a.317.317 0 0 1 .172-.303A1.81 1.81 0 0 1 12 6a1.778 1.778 0 0 1 .718.141.333.333 0 0 1 .182.314v1.142c0 .448-.45.676-.9.676s-.9-.228-.9-.676zm4.975 3.602l-2.115.235a.956.956 0 0 0-.806.896l-.084.937a1.11 1.11 0 0 0 .004.24l.649 5.047a.508.508 0 0 1-.467.598.482.482 0 0 1-.454-.38l-.716-2.784a.087.087 0 0 0-.172 0l-.716 2.784a.483.483 0 0 1-.454.38.51.51 0 0 1-.468-.598l.65-5.047a1.082 1.082 0 0 0 .004-.241l-.084-.936a.956.956 0 0 0-.806-.896l-2.115-.235a.507.507 0 0 1-.425-.522A.501.501 0 0 1 7.972 9h8.056a.501.501 0 0 1 .472.525.507.507 0 0 1-.425.522z" /></svg>);