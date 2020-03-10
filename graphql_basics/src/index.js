import {
  GraphQLServer
} from 'graphql-yoga'


// Type definitions {schema}
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
  }
`


// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query!'
    },

    name() {
      return 'Jayce Azua'
    },

    location() {
      return 'I am currently located in Miami, FL!'
    },

    bio() {
      return 'I have two internships! I will work for a government agency in my mid 30s!'
    }
  }
}


const server = new GraphQLServer({
  typeDefs,
  resolvers
})


server.start(() => {
  console.log("It is alive")
})