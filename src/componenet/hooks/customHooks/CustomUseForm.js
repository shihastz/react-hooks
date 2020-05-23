import React from 'react'
import { useForm } from './useForm'

function CustomUseForm() {

    const [value, handleChange] = useForm({
        name : "",
        email : ""
    })
    return (
        <div>
            <hr/>
            <h2>Custom Form (customHooks)</h2>
            <input type="text" name="name" value={value.name} onChange={handleChange}/>
            <input type="text" name="email" value={value.email} onChange={handleChange}/>
            <p>Name : {value.name}</p>
            <p>Email : {value.email}</p>
        </div>
    )
}

export default CustomUseForm
