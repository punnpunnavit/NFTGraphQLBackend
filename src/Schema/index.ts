// Import required stuff fron graphql
const { GraphQLSchema, GraphQLObjectType } = require("graphql")
// Import queries
const {} = require("./Queries")
// Import mutations
const {} = require("./Mutations")
// Define QueryType
const QueryType = new GraphQLObjectType({
 name: "QueryType",
 description: "Queries",
 fields: {}
})

// Define MutationType
const MutationType = new GraphQLObjectType({
 name: "MutationType",
 description: "Mutations",
 fields: {}
})

export = new GraphQLSchema({
 query: QueryType,
 mutation: MutationType,
})