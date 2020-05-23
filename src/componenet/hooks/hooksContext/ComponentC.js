import React, {useContext} from 'react'
import { UserContext, ChannelContext } from '../../../App'

function ComponentC() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            <h3>Hooks Context</h3>
              {user} - {channel}
        </div>
    )
}

export default ComponentC
