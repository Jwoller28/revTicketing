import React from 'react'

function EventsDemo() {

    function clickEventTriggered(){
        console.log("Click button triggered");
    }

    function inputChanged(event: any){
        console.log(event.target.value);
        // console.log("input changed");
    }

  return (
    <>
        <button onClick={clickEventTriggered}>Click Event</button>
        <button onMouseOver={() => console.log("hover event triggered")}>Hover Event</button>
        <input type="text" onChange={inputChanged}></input>
    </>
  )
}

export default EventsDemo