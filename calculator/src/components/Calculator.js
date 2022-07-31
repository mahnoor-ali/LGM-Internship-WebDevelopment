import React, { useState } from 'react'
import Button from './Button'
import Screen from './Screen'

export default function Calculator() {

    const buttonsList = ['x²', 'log', 'ln', '(', ')', 'x!', 'C', 'CE', '%', '/', 'sin', '7', '8', '9', 'X', 'cos', '4', '5', '6', '-', 'tan', '1', '2', '3', '+', '√', 'π', '0', '.', '='];
    const [lastCharacter, setLastCharacter] = useState('');
    const [result, setResult] = useState('');
    const [expression, setExpression] = useState('');
    const operand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operatorFirst = ['log', 'ln', 'sin', 'cos', 'tan', '√', '.']; //contains those operators that can be first in the expression
    const operatorLater = ['x²', 'x!', '%', '/', '-', '+']; //contains those operators that cannot be first in the expression
    const evaluateExpression = (character) => {
        //if its invalid expression, return error and clear the screen and expression
        if ((lastCharacter === '' || (operatorFirst.includes(lastCharacter))) && (operatorLater.includes(character))) {
            // to avoid adding multiple operators in a row that results in an error
            setResult("BAD EXPRESSION");
            setLastCharacter('');
            setExpression('');
            console.log("1st check");
        }
        // consecutive occurence of " binary then unary operator" OR "binary then binary operator" is not allowed
        else if ((operatorLater.includes(lastCharacter)) && ((operatorFirst.includes(character)) || (operatorLater.includes(character)))) {
            //to avoid adding multiple operators in a row that results in an error
            setResult("BAD EXPRESSION");
            setLastCharacter('');
            setExpression('');
            console.log("2nd check");
        }
        else {
            if (character === '.') {
                character = "0.";
            }

            if((character!=='=')&&(character!=='CE')){
            setExpression(expression+character);
            }

            //if its a valid expression OR equal is pressed, evaluate it and display the result
            if ((character === '=') || (operand.includes(character))) {
                //if its a valid expression OR equal is pressed, evaluate it and display the result
                let resultt=eval(expression);
                setResult(resultt);
                setLastCharacter(character);
            }

            if (character === 'C') {
                setLastCharacter('');
                setExpression('');
            }
            else if (character === 'CE') {
                //don't update last character as current character
            }
            else {
                setLastCharacter(character); //update the last character
            }

            console.log("exp: " , expression);
            console.log("last: ",lastCharacter);
            console.log("char: " , character);
            console.log("res: " , result);

        }
    }

    return (
        <div id="calculator">
            <Screen result={result} expression={expression} />
            <div id="keyPad" className="d-flex flex-wrap justify-content-center">
                {
                    buttonsList.map(character =>
                        <Button symbol={character} key={character} handleClick={() => evaluateExpression(character)} />
                    )
                }
            </div>

        </div>
    )
}
