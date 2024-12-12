import React from 'react'

const DUMMY_ARRAY = [
    {
        firstName: "mike",
        lastName: "Jones"
    },
    {
        firstName: "Jim",
        lastName: "Jones"
    },
    {
        firstName: "Jon",
        lastName: "Jones"
    },
    {
        firstName: "Anne",
        lastName: "Jones"
    },
    {
        firstName: "mike",
        lastName: "Jones"
    },
]

function ListDemo() {
  return (
    <>
        {/* <h1>{DUMMY_ARRAY[0].firstName}</h1> */}
        {
            DUMMY_ARRAY.map((obj, index) => {
                return  (
                    <div key={index}>
                        <h3>{obj.firstName}</h3>
                        <h3>{obj.lastName}</h3>
                        <button>Click Me</button>
                    </div>
                )
            })
        }
    </>
  )
}

export default ListDemo