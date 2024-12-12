import React, { useEffect, useState } from 'react'
import { visitFunctionBody } from 'typescript'

function HooksDemo() {

    // let [visiblity, setVisibility] = useState(false);
    // let [count, setCount] = useState(0);

    let [state, setState] = useState({
        visibility: false,
        count: 0,
        pokemon: {} as any
    })

    useEffect(() => {
        async function getDitto(){
            let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
            let data = await response.json();
            console.log("I have been ran!");
            setState({...state, pokemon: data});
        }

        getDitto();
    },[state.count])


    // let isVisible = true;

    function toggleTextVisibility(){
        // isVisible = !isVisible;
        // setVisibility(!visiblity);
        // console.log(isVisible);
        setState({
            ...state,
            visibility: !state.visibility
        })
    }
  return (
    <div>
        <button onClick={toggleTextVisibility}>Toggle</button>

        {
            state.visibility ? <h2>Am I visible?</h2> : <></>
        }

        <button onClick={() => setState({
            ...state,
            count: state.count + 1
        })}>Increment</button>
        <button onClick={() => setState({
            ...state,
            count: state.count + 1
        })}>Decrement</button>

        <h2>Counter: {state.count}</h2>


        {
            state.pokemon.abilities ? <h1>{state.pokemon.abilities[0].ability.name}</h1> : <></>
        }
    </div>
  )
}

export default HooksDemo