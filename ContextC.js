import React,{useContext} from 'react'
import {UserContext,ChannelContext} from './App'

function ContextC() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
           Hey {user} here and  Im a {channel}
        </div>
    )
}

export default ContextC
