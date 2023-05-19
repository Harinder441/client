import React from 'react'
import { Button } from 'react-bootstrap'
import './UI.css'
export default function ButtonMain(props) {
  return (
    <Button bsPrefix='main-button'  {...props} >{props.children} </Button>
  )
}
