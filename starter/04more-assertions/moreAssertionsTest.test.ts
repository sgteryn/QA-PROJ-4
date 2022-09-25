import { add } from './moreAssertions'

it('it should transform a string number to a number of type number.', () => {
  // Arrange
const arr = ['123']
  // Act
  const numericStringToNumberValues = Number(arr)
  const result = numericStringToNumberValues
  // Assert

  expect(typeof result).toBe("number")
})

it('it should yield NaN for non-transformable values', () => {
  // Arrange and Act
  // create a function that calls the add function without any arguments and assign it to a variable
function arr(add){
  if(arr.length == 0){
    console.log(new Error('NaN'))
}

const result = arr
  // Assert
  // use the expect function to assert that the function throws an error, use toThrow function
  expect(typeof result).toThrow('NaN')
}
})