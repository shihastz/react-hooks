import {useState} from 'react'

function useInput(initialValue) {
    const [value, setvalue] = useState(initialValue)

    const bind = {
        value : value,
        onChange : e => {
            setvalue(e.target.value)
        }
    }

    const reset = () => {
        setvalue(initialValue)
    }
    
    return [value, bind, reset]
}

export default useInput
