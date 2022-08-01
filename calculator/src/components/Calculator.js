import React, { useState } from 'react'
import Button from './Button'
import Screen from './Screen'

export default function Calculator() {
    const [lastCharacter, setLastCharacter] = useState('');
    const [result, setResult] = useState('');
    const [expression, setExpression] = useState('');
    // const buttonsList = ['x²', 'log', 'ln', '(', ')', 'x!', 'C', 'CE', '%', '/', 'sin', '7', '8', '9', 'x', 'cos', '4', '5', '6', '-', 'tan', '1', '2', '3', '+', '√', 'π', '0', '.', '='];
     const buttonsList = ['%', 'x!', '√', 'π','x²', '(', ')', 'C','7', '8', '9', 'x','4', '5', '6', '-','1', '2', '3', '/',  '.', '0', '=','+'];
    const operand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operatorFirst = ['(','√']; //contains those operators that can be first in the expression
    const operatorLater = ['x²', 'x!', '%', '/', '-', '+', '*']; //contains those operators that cannot be first in the expression


    function Factorial(n) {
        var ans=1;
        for (var i = 2; i <= n; i++)
            ans = ans * i;
        return ans;
    }
    const reset= () => {
        setLastCharacter('');
        setExpression('');
    }

    const evaluateExpression = (character) => {
        if (character === 'x') {
            character = "*";
        }

        //if its invalid expression, return error and clear the screen and expression
        if ((lastCharacter === '' || (operatorFirst.includes(lastCharacter))) && (operatorLater.includes(character))) {
            // to avoid adding multiple operators in a row that results in an error
            setResult("BAD EXPRESSION");
            reset();
        }
        // consecutive occurence of " binary then unary operator" OR "binary then binary operator" is not allowed
        else if ((operatorLater.includes(lastCharacter)) && ((operatorFirst.includes(character)) || (operatorLater.includes(character)))) {
            //to avoid adding multiple operators in a row that results in an error
            setResult("BAD EXPRESSION");
            reset();
        }
        else if ((lastCharacter === "/") && (character === "0")) {
            setResult("DIVISION BY ZERO ERROR!");
            reset();
        }
        else {
            if ((lastCharacter === '√')&&(operand.includes(character))) {
                let resultt=Math.sqrt(character);
                setResult(resultt);
            }
            if (character === '%') {
                setResult(lastCharacter/100);
            }
            if (character === 'x!') {
                character = "!";
                setResult(Factorial(lastCharacter));
                reset();
            }
            if (character === 'π') {
                character = "3.1416";
            }
            if ((character === '.')&&(!operand.includes(lastCharacter))) {
                character = "0.";
            }
            if (character === 'x²') {
                character = "**2";
            }
            if ((character !== '=') && (character !== 'CE') && (character !== 'C')) {
                setExpression(expression + character);
            }
            //if its a valid expression OR equal is pressed, evaluate it and display the result
            if (character === '=') {
                //if its a valid expression OR equal is pressed, evaluate it and display the result
                let resultt = eval(expression);
                setResult(resultt);
                setLastCharacter(character);
            }

            if ((character === 'C') || (character === 'CE')) {
                setLastCharacter('');
                setExpression('');
                setResult('');
            }
            else {
                setLastCharacter(character); //update the last character
            }

            console.log("exp: ", expression);
            console.log("last: ", lastCharacter);
            console.log("char: ", character);
            console.log("res: ", result);

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
