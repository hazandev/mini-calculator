export const calcService = {
    calculator
}


function calculator(exercise) {
    debugger
    let solution = _calcMult(exercise)
    solution = _calcDiv(solution);
    solution = _calcAdd(solution);
    solution = _calcDiff(solution);
    return solution
}


function _calcMult(exercise, currOperator = '*') {
    let indexOperator = _findOperator(exercise, currOperator);
    while (indexOperator > -1) {
        exercise = _calcSwitch(exercise, indexOperator, currOperator)
        indexOperator = _findOperator(exercise, currOperator);
    }
    return exercise
}

function _calcDiv(exercise, currOperator = ':') {
    let indexOperator = _findOperator(exercise, currOperator);
    while (indexOperator > -1) {
        exercise = _calcSwitch(exercise, indexOperator, currOperator)
        indexOperator = _findOperator(exercise, currOperator);
    }
    return exercise
}


function _calcAdd(exercise, currOperator = '+') {
    let indexOperator = _findOperator(exercise, currOperator);
    while (indexOperator > -1) {
        exercise = _calcSwitch(exercise, indexOperator, currOperator)
        indexOperator = _findOperator(exercise, currOperator);
    }
    return exercise
}


function _calcDiff(exercise, currOperator = '-') {
    let indexOperator = _findOperator(exercise, currOperator);
    while (indexOperator > -1) {
        exercise = _calcSwitch(exercise, indexOperator, currOperator)
        indexOperator = _findOperator(exercise, currOperator);
    }
    return exercise
}



function _findOperator(exercise, operator) {
    return exercise.indexOf(operator);
}

function _findLeftVal(exercise, index) {
    const operator = '-+*:'
    const sliceStr = exercise.substring(0, index);
    let leftval;
    let prevOperator;
    for (let i = sliceStr.length - 1; i > -1; i--) {
        if (operator.includes(sliceStr[i])) {
            prevOperator = i;
            leftval = sliceStr.substring(prevOperator+1, index);
            break
        }
        if (i === 0) {
            leftval = exercise.substring(0, index);
        }
    }
    return leftval
}

function _findRightVal(exercise, index) {
    const operator = '-+*:'
    const sliceStr = exercise.substring(index + 1);
    let rightval;
    let prevOperator;
    for (let i = 0; i < sliceStr.length; i++) {
        if (operator.includes(sliceStr[i])) {
            prevOperator = i;
            rightval = sliceStr.substring(0, prevOperator);
            break
        }
        if (i === sliceStr.length - 1) {
            rightval = exercise.substring(index + 1);
        }
    }
    return rightval
}


function _calcSwitch(exercise, index, operator) {
    const leftVal = _findLeftVal(exercise, index);
    const rightVal = _findRightVal(exercise, index);
    let calcVal;
    switch (operator) {
        case '*':
            calcVal = leftVal * rightVal 
            break
        case ':':
            calcVal =   leftVal / rightVal
            break
        case '+':
            calcVal = parseFloat(leftVal) + parseFloat(rightVal)
            break
        case '-':
            calcVal =  parseFloat(leftVal) - parseFloat(rightVal)
            break
        default:
            break;
    }
    let updateExc = '';
    updateExc += exercise.substring(0, index - leftVal.length);
    updateExc += `${calcVal}`
    updateExc += exercise.substring(index + rightVal.length + 1);
    return (updateExc);
}
