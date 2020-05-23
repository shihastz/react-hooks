import React, {useState} from 'react'
import HooksMousePosition from './HooksMousePosition'

function HooksMouseDisplay() {
    const[display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Mouse Position</button>
            { display && <HooksMousePosition/>}
        </div>
    )
}

export default HooksMouseDisplay
