import React, { useState, useEffect} from 'react'

function IntervalHookCounter() {
    const[count, setCount] = useState(0)

    const tick = () =>{
        setCount(prevState => prevState +1)
    }

    useEffect(() => {
        console.log('useeffect called')
        const interval = setInterval(tick, 1000)
        return () => {
            console.log('umount')
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <hr/>
            <h3>Automatic Counter</h3>
            {count}
            <hr/>
        </div>
    )
}

export default IntervalHookCounter
