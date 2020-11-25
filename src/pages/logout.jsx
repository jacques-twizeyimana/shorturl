import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Logout(){
    let history = useHistory()

    localStorage.removeItem('token')
    localStorage.removeItem('user')

    history.push("/")

    return <div></div>
}