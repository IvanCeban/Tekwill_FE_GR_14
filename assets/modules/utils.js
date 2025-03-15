export const getSum = (a, b) => {
    console.log('sum: ', a + b);  
}

export const getDiv = (a, b) => {
    console.log('div: ', a - b);  
}

export const getMult = (a, b) => {
    console.log('mult: ', a * b);  
}

export const getMod = (a, b) => {
    console.log('mult: ', a % b);  
}

const allFunctions = {
    sum: getSum,
    mult: getMult
}

export default allFunctions;