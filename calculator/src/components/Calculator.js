import React, { useEffect, useState } from 'react'
import Button from './Button'
import Screen from './Screen'

export default function Calculator() {
    const [lastCharacter, setLastCharacter] = useState('');
    const [result, setResult] = useState('');
    const [expression, setExpression] = useState('');
    const [visibleExpression, setVisibleExpression] = useState('');
    // const buttonsList = ['x²', 'log', 'ln', '(', ')', 'x!', 'C', 'CE', '%', '/', 'sin', '7', '8', '9', 'x', 'cos', '4', '5', '6', '-', 'tan', '1', '2', '3', '+', '√', 'π', '0', '.', '='];
    const buttonsList = ['x²', 'x!', '√', 'π', '(', ')', '×', 'C', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '/', '.', '0', '=', '+'];
    const operand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operatorFirst = ['(', '√']; //contains those operators that can be first in the expression
    const operatorLater = ['x²', 'x!', '%', '/', '-', '+', '*']; //contains those operators that cannot be first in the expression

    function Factorial(n) {
        var ans = 1;
        for (var i = 2; i <= n; i++)
            ans = ans * i;
        return ans;
    }
    const reset = () => {
        setLastCharacter('');
        setExpression('');
    }

    const clear = () => {    //clear screen
        setExpression('');
        setVisibleExpression('');
        setResult('');
        setLastCharacter('');
    }

    const clearEntry = () => {
        setExpression(expression.slice(0, -1));
        setVisibleExpression(expression.slice(0, -1));
        setLastCharacter(expression.slice(expression.length - 1));
    }

    // check expression validity then evaluate the expression
    const evaluate = () => {
        if (expression.includes('(')) {
            let count = 0;
            for (let i = 0; i < expression.length; i++) {
                if (expression[i] === '(') {
                    count++;
                }
                else if (expression[i] === ')') {
                    count--;
                }
            }
            count === 0 ? setResult(eval(expression)) : setResult("BAD EXPRESSION");
            setVisibleExpression(expression);
        }
        else {
            setResult(eval(expression));
            setVisibleExpression(expression);
        }
    }


    const evaluateExpression = (character) => {
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
            if (character === 'x') {
                character = "*";
            }
            if ((character !== '=') && (character !== 'CE') && (character !== 'C')) {
                setExpression(expression + character);
            }
            if ((lastCharacter === '√') && (operand.includes(character))) {
                let resultt = Math.sqrt(character);
                setResult(resultt);
            }
            if (character === 'x!') {
                character = "!";
                setResult(Factorial(lastCharacter));
                reset();
            }
            if (character === 'π') {
                character = "3.1416";
            }
            if ((character === '.') && (!operand.includes(lastCharacter))) {
                character = "0.";
            }
            if (character === 'x²') {
                character = "**2";
            }
            //if its a valid expression and equal is pressed, evaluate it and display the result
            if (character === '=') {
                evaluate();
            }
            if (character === 'C') {
                clear();
            }
            if (character === '×') {
                clearEntry();
            }
            else {
                setLastCharacter(character); //update the last character
            }
        }
    }

    useEffect(() => {
        //visibleExpression = characters that fits screen size i.e last 19 characters of expression
        if (expression.length > 19) {
            setVisibleExpression(expression.substring(expression.length - 19, expression.length));
        }
        else {
            setVisibleExpression(expression);
        }
    }, [expression]);

    return (
        <div id="calculator">
            <Screen result={result} expression={visibleExpression} />
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