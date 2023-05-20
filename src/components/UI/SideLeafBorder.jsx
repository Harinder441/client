import React from 'react'
import "./UI.css"
export default function SideLeafBorder({children,left,right}) {
  return (
    <div className={(left ? 'leaf-border-left ' : '') + (right ?'leaf-border-right':'')}>{children}</div>
  )
}
