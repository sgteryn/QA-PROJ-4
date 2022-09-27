import { transformToNumber } from './nums'

it('should transform a string number to a number of type number', () => {
    const input = '1'

    const result = transformToNumber(input)

    expect(result).toBe(1)
})

it('it should transform a string number to a number of type number.', () => {
    // Arrange
    // create a variable with a string value that is a valid number, e.g. '1'
 const input = '23'
    // Act
    // call the transformToNumber function on an input value and assign the result to a variable
const result = transformToNumber(input)
    // Assert
    // use the expect function to assert that the result is equal to the expected result
    expect(result).toBe(23)
})

it('it should yield NaN for non-transformable values', () => {
    // Arrange
    const input = 'invalid'
    const input2 = {}

    // Act
    // for each input value, call the transformToNumber function on an input value and assign the result to a variable
const resultOne = transformToNumber(input)
const resultTwo =  transformToNumber(input2)
    // Assert
    // for each result value, use the expect function to assert that the result is equal to NaN, use toBeNaN function
expect(resultOne).toBeNaN
expect(resultTwo).toBeNaN
})