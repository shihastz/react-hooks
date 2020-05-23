import React, {useState, useEffect} from 'react'

function EffectHooksCounter() {

    const[count, setCount] = useState(0)
    const[name, setName] = useState('')

    useEffect(() => {
        console.log('title changes')
        document.title = `You clicked ${count} times`
    }, [count])


    return (
        <div>
            <hr/>
            <h2>Counter in website title using useEffect (useEffect only run when count state changes)</h2> 
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <hr/>
        </div>
    )
}

export default EffectHooksCounter
