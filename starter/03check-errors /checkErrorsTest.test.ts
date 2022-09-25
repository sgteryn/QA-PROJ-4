import {add} from './checkErrors'


it('it should throw an error if an empty array is provided', () => {
    // Arrange
  const arr = []

    // Act
 function result(){ 
 if(arr.length == 0){
  console.log(new Error('empty array'))
} else if(arr.length !== 0){
  add(arr)
}
}
    // Assert
  
  expect(result).toThrowError
  
})
   
  
  it('it should throw an error if no value is passed into the sum function', () => {
    // Arrange and Act
    // create a function that calls the add function without any arguments and assign it to a variable
function arr(add){
  if(arr.length == 0){
    console.log(new Error('no value passed'))
}

var result = arr
    // Assert
    // use the expect function to assert that the function throws an error, use toThrow function
    expect(arr).toThrow('no value passed');
  }
})
