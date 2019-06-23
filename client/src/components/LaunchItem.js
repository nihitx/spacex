import React from 'react'

export default function LaunchItem({launch : {flight_number, mission_name}}) {
    return (
        <div>
            <p>Mission : {mission_name}</p>
            <p>Flight number : {flight_number}</p>
            <button>Details</button>
        </div>
    )
}
