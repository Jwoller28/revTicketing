import React from "react";

function ChildComponent(props: { backgroundColor: string; isBold: boolean }) {
  return (
    <div style={
        { 
            backgroundColor: props.backgroundColor,
            fontWeight: props.isBold ? "bolder" : "lighter" 
        }
    }>ChildComponent</div>
  );
}

export default ChildComponent;
