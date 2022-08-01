import React from 'react'

export default function Screen(props) {
    let error=false;
    if((props.result==='BAD EXPRESSION')||(props.result==="DIVISION BY ZERO ERROR!"))
    {
        error=true;
    }
  return (
    <div id="screen">
        <div id="expression" readOnly> {props.expression} </div>
        <div id="result" className={error? "text-danger" : ""}>{props.result} </div>
    </div>
  )
}
