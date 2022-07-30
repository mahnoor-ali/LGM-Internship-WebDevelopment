import React,{useState} from 'react'
import Button from './Button'
import Screen from './Screen'

export default function Calculator() {

    const [buttonsList, setButtonsList] = useState(['x²','log', 'ln', '(', ')','x!', 'C', 'x', '%', '/', 'sin', '7', '8', '9', 'X', 'cos', '4', '5', '6', '-', 'tan', '1', '2', '3', '+', '√', 'π', '0', '.', '=']);

  return (
    <div id="calculator">
        <Screen/>
        <div id="buttonsBoard" className="d-flex flex-wrap justify-content-center">
            {
                buttonsList.map(symbol => 
                   <Button symbol={symbol} key={symbol} />
                )
            }
        </div>

    </div>
  )
}
