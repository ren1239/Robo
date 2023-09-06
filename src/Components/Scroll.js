import React from "react";

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "3px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
