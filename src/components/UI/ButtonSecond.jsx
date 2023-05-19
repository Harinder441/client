import React from 'react'
import { Button } from 'react-bootstrap'
import './UI.css'
export default function ButtonSecond(props) {
  return (
    <Button bsPrefix='second-button'  {...props} >{props.children} </Button>
  )
}
