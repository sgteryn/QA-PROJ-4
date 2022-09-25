import {add} from "./math"


it('Should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2];
  
    // Act
    const result = add(numbers);
  
    // Assert
    const expectedResult = numbers.reduce(
      (prevValue, curValue) => prevValue - curValue,
      0
    );
    expect(result).toBe(expectedResult + 6);
  });
  
  it('Should yield a correct sum if an array of numeric string values is provided', () => {
    // TODO: implement this test
  
      // Arrange
      // create an array of numeric string values
      const numericStringValues = ['5', '6']
      // Act
      // call the add function with the array of numeric string values
      const numericStringToNumberValues = numericStringValues.map(str => {
        return Number(str);
      })
    
      const result = add(numericStringValues)
      // Assert
      // create a variable with the expected result (sum of the array of numeric string values)
      // use the expect function to assert that the result is equal to the expected resul

      const expectedResult = numericStringToNumberValues.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0)

      expect(result).toBe(expectedResult)
  })
  
  it('Should yield "NaN" if invalid number is provided', () => {
      // TODO: implement this test
  
      // Arrange
      // create an array of numeric string values where one of the values is 'invalid'
      const numericStringValuesNan = ['5a', '6']

      const numericStringToNumberValuesNan = numericStringValuesNan.map(str => {
        return Number(str);
      })
      // Act
      // call the add function with the array
       const result = add(numericStringValuesNan)
       
      // Assert
      // use the expect function to assert that the result is equal to NaN, use toBeNaN function

       expect(result).toBeNaN
  });