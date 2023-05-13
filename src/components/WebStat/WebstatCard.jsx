import React from 'react'

export default function WebstatCard(props) {
  return (
    <div className={"stats-card "+props.className}>
        <h3>Members</h3>
        <p className="count">52</p>
    </div>
  )
}
