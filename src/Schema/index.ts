// Import required stuff fron graphql
const { GraphQLSchema, GraphQLObjectType } = require("graphql")
// Import queries
const {users} = require("./Queries")
// Import mutations
const { register,login } = require("./Mutations")
// Define QueryType
const QueryType = new GraphQLObjectType({
 name: "QueryType",
 description: "Queries",
 fields: {users}
})

// Define MutationType
const MutationType = new GraphQLObjectType({
 name: "MutationType",
 description: "Mutations",
 fields: { register,login }
})

export = new GraphQLSchema({
 query: QueryType,
 mutation: MutationType,
})