import {
  GraphQLServer
} from 'graphql-yoga'


/**
 * Create query definition and resolver for each:
 * 
  * title - string product name
  * price - number as float
  * releaseYear - number as int (optional)
  * rating - number as float (optional)
  * inStock - boolean
 */

// Type definitions {schema}
const typeDefs = `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
  }
`


// Resolvers
const resolvers = {
  Query: {
    title() {
      return 'Original XBOX'
    },
    price() {
      return 2000.34
    },
    releaseYear() {
      return null
    },
    rating() {
      return null
    },
    inStock() {
      return false
    },
  }
}

// instantiate the GraphQL Server with graphql-yoga
const server = new GraphQLServer({
  typeDefs,
  resolvers
})

// Start GraphQL server
server.start(() => {
  console.log("It is alive")
})