import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const[posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
            setPosts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <hr/>
            <h3>Listing Posts (Data fetching)</h3>
            <ul>
                {
                    posts.slice(0,5).map((val, index) => (
                        <li key={val.id}>{val.title}</li>
                    ))
                }
            </ul>
            <hr/>
        </div>
    )
}

export default DataFetching
