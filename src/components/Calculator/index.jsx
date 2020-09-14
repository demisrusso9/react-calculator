import React from 'react'
import Button from '../CalculatorButton/'
import Display from '../CalculatorDisplay/'

import './style.css'

function Calculator() {

    function clearMemory() {
        console.log('limpar');
    }

    function setOperation(operation) {
        console.log(operation);
    }

    function addDigit(n) {
        console.log(n);
    }

    return (
        <>
            <h1>Calculator</h1>

            <div className="calculator">
                <Display value={300} />
                <Button label="AC" click={() => clearMemory()} triple/>
                <Button label="/" click={e => setOperation(e)} operation />
                <Button label="7" click={e => addDigit(e)} />
                <Button label="8" click={e => addDigit(e)} />
                <Button label="9" click={e => addDigit(e)} />
                <Button label="*" click={e => setOperation(e)} operation />
                <Button label="4" click={e => addDigit(e)} />
                <Button label="5" click={e => addDigit(e)} />
                <Button label="6" click={e => addDigit(e)} />
                <Button label="-" click={e => setOperation(e)} operation />
                <Button label="1" click={e => addDigit(e)} />
                <Button label="2" click={e => addDigit(e)} />
                <Button label="3" click={e => addDigit(e)} />
                <Button label="+" click={e => setOperation(e)} operation />
                <Button label="0" click={e => addDigit(e)} double />
                <Button label="." click={e => addDigit(e)} />
                <Button label="=" click={e => setOperation(e)} operation />
            </div>
        </>
    )
}

export default Calculator;