import React from 'react'
import { Outlet } from 'react-router-dom'

export default function JoinLayout() {
    return (
        <div style={{height: "100vh", overflowY: "auto"}}>
            <Outlet />
        </div>
    )
}
