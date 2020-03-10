/*import myCurrentLocation, {
  message,
  name,
  getGreeting
} from './myModule'
// import myCurrentLocation from './myModule'

console.log(message)
console.log(name)
console.log(myCurrentLocation)
console.log(getGreeting('Andrew'))
*/

import myAddFunction, {substract} from './math'

console.log(myAddFunction(10, 5))
console.log(substract(10, 5))

// 1. Create a new file called math.js
// 2. Define add function that takes two arguments and adds them up
// 3. Define substract function that takes two arguments and substracts them
// 4. Set up add as a default export
// 5. Set up substract function as a named export
// 6. import both functions into index.js
// 7. Use both functions and print the results from each