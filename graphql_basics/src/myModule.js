// named export - has a name. have as many as needed
// default export - has no name. you can only have one
const message = "Hello from myModule.js"
const name = "Jayce"
const location = "San Francisco"
const getGreeting = (name) => {
  return `Welcome to the course; ${name}`
}

export {
  message,
  name,
  location as default,
  getGreeting
}